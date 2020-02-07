const express = require('express');
    const bodyParser = require('body-parser');

    const app = express();
  require('dotenv').config({ path: 'variables.env' });
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
/*
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var myobj = { name: "Company Inc", address: "Highway 37" };
      dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });


*/

    const verifyWebhook = require('./verify-webhook');

        app.get('/', verifyWebhook);




        const messageWebhook = require('./message-webhook');

            app.post('/', messageWebhook);


    app.listen(5000, () => console.log('Express server is listening on port 5000'));
