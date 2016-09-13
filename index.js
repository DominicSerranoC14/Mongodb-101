'use strict';

//Connect to the Mongodb Database
const { MongoClient } = require('mongodb');
//Mongo url to connect the client to
const MONGODB_URL = 'mongodb://localhost:27017/test';
/////////////////////////////////////////


/////////////////////////////////////////
//Using a promise syntax with the driver
MongoClient
  .connect(MONGODB_URL)
  .then(db => {
  //Log the DB connection
  console.log("Test db", db);



  //Close the connection
  db.close();
});
