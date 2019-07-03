const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require('express');
const router = express.Router();
// Connection URL
router.get('/ser',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    const url = 'mongodb://localhost:27017';
    // Database Name
    const dbName = 'chaoji';
    // Use connect method to connect to the server
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        //选择库
        const db = client.db(dbName);
        //选择表 集合
        db.collection('indexdata').find({
        }).toArray(function (err, docs) {
            assert.equal(err, null);
            // console.log("Found the following records");
            // console.log(docs[0].results)
            res.send(docs)
        });
        client.close();
    });
    // console.log(req)
});
router.get('/serh',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    const url = 'mongodb://localhost:27017';
    // Database Name
    const dbName = 'chaoji';
    // Use connect method to connect to the server
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        //选择库
        const db = client.db(dbName);
        //选择表 集合
        db.collection('listdata').find({
        }).toArray(function (err, docs) {
            assert.equal(err, null);
            res.send(docs)
        });
        client.close();
    });
    // console.log(req)
});
module.exports = router;