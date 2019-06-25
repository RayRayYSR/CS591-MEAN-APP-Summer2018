const express = require('express');
//remember to npm install request separately if there is an unresolved "request" error
const request = require('request');
const router = express.Router();
// Connect to the db
const db = require('../mongo/mongo');
db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});
//mongo usage
router.post('/', function (req, res, next) {
    let name = req.body.name;
    db.getDB();
    db.breweryInfo.findOne({name:name},
        (err,response) => {
        if (response){
            res.send(response)
        }
        else{
            http.get('https://api.openbrewerydb.org/breweries/5494',(response)=>{
            }
            )
            db.insertOne({response})
            res.send(response)
        }
        }
    )
});

router.get('/', function (req, res, next)  {
    let mongo = db.getDB();
    mongo.breweryInfo('name').find().
    toArray(function(err, docs) {
        console.log(docs)
        res.send(docs);
    })
});

//new version with promise on 6/5/19
const doReq= function(){
    return new Promise(function (resolve,reject) {
        //github API:https://api.github.com/emojis
        //brewery: https://api.openbrewerydb.org/breweries and https://api.openbrewerydb.org/breweries/5494
        //ghibliapi API:https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49
        const url = "https://api.openbrewerydb.org/breweries/5494";
        request.get(url, (err, response, body) => {
            if (err) {reject(err);}
            else{resolve(body);}
        });
    })
};

//second API call, use 1st API to get brewery name and then find the brewery type in another API
const doReq2=function(){
    return new Promise(function (resolve,reject) {
        const url = "https://api.openbrewerydb.org/breweries";
        request.get(url, (err, response, body) => {
            if (err) {reject(err);}
            else{resolve(body);}
        });
    })
};

router.get('/', (req, res, next) => {
    //first API call
  doReq()
      .then(function (body) {
          const name = JSON.parse(body).name;
          const type = JSON.parse(body).brewery_type;
          const street= JSON.parse(body).street;
          const json_data = {name:name, type:type, street:street};
          const result = [];
          //second API call
          doReq2().then(function (name) {
              const type2 = JSON.parse(name).brewery_type;
              res.json(type2);
          })
          //put into array so that they can be displayed on frontend
          for(const i in json_data)
              result.push([i,json_data [i]]);
          res.json(result);
      })
      .catch(function(err) {
          console.log(err);
      });
});

module.exports = router;
