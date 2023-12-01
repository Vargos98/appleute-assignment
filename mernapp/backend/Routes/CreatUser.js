const express = require('express');
const router = express.Router();
const User = require('../models/User')



const { body, validationResult } = require('express-validator');

// now we check the req sent from the body full-fills our requirements <just like how we add "required in the entry field of passwords and emails";
router.post("/creatuser", [
    body('email', 'Incorrect Email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Incorrect Password').isLength({ min: 5 })]

    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await User.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                location: req.body.location
            })
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }

    })



router.post("/loginuser", [
    body('email', 'Incorrect Email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 })]
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        let email = req.body.email;
        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "try logging in with correct email" });
            }

            if (!req.body.password === userData.password) {
                return res.status(400).json({ errors: "try logging in with correct password" });
            }
            return res.json({ success: true });



        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }

    })

module.exports = router;