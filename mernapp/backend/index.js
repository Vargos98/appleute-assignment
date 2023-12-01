const express = require('express');
const app = express();
const mongoDB = require('./db')
const port = 5000;
mongoDB();
app.get("/",(req,res)=>{
    res.send("hello world");
})
app.use(express.json());
app.use('/api', require("./Routes/CreatUser"));


app.listen(port,()=>{
    console.log(`port running on ${port}`);
})