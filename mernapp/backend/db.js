const mongoose = require('mongoose');
//               mongodb+srv://vargos98:<password>@cluster0.j8cqdbr.mongodb.net/<databaseName>?retryWrites=true&w=majority
const mongoURI = 'mongodb+srv://vargos98:9828206Uk@cluster0.j8cqdbr.mongodb.net/gofoodmern?retryWrites=true&w=majority'

const mongoDB = async () => {

    //after we have defined the endpoint in the mongURI : we need to connect it.
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
        if (err) {
            console.log("---", err);
        } else {
            // after this we need to fetch the data from the collection -> database named: food_items. 
            console.log("Connected successfully");
            const fetched_data = mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {

                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {

                    if (err) {
                        console.log(err);

                    } else {
                        // to check the data is recieved or not ?
                        // console.log(data);

                        global.food_items = data;
                        global.foodCategory = catData;
                        // console.log(global.food_items);
                    }

                })
                // if(err){
                //     console.log(err);

                // }else{
                //     // to check the data is recieved or not ?
                //     // console.log(data);

                //     global.food_items =data;
                //     // console.log(global.food_items);
                // }
            });
        }

    });
}


module.exports = mongoDB;


