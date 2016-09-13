'use strict';

//Connect to the Mongodb Database
const { MongoClient } = require('mongodb');
//Mongo url to connect the client to
const MONGODB_URL = 'mongodb://localhost:27017/test';
const [,, ...arg] = process.argv;
/////////////////////////////////////////


/////////////////////////////////////////
const incorrectUsage = () => {
  console.log('Incorrect usage of arguments');
  process.exit();
}

// arg.length === 1 ? false: incorrectUsage();
/////////////////////////////////////////


/////////////////////////////////////////
//Using a promise syntax with the driver
MongoClient
  .connect(MONGODB_URL)
  .then(db => {
  //Log the DB connection
  // console.log("Test db", db);
  //Reading data. Need to convert to an array, .find() is an async action
  db.collection('restaurants')
    .find({name: RegExp(`${arg.join(' ')}`, 'i')}, {name: true, borough: true})
    .sort({name: 1})
    .toArray()
    .then((restaurants) => {
      restaurants.forEach(restaurant => {

        //Log each restaurants name, as long as the name exists
        restaurant.name ? console.log(restaurant.name, ' | ' ,restaurant.borough): false;

      });
    })
    //Close the connection
    .then(() => db.close())
    //Catch errors
    .catch(console.error);
});
/////////////////////////////////////////
