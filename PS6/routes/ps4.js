const express = require('express');
//remember to npm install request separately if there is an unresolved "request" error
const request = require('request');
const router = express.Router();

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

router.get('/', (req, res, next) => {
  doReq()
      .then(function (body) {
          //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
          const name = JSON.parse(body).name;
          const type = JSON.parse(body).brewery_type;
          const street= JSON.parse(body).street;
          //instead of render backend, we just need the JSON data
          //res.render('ps4', {title: 'brewery data', j_name:j_name});
          const json_data = {name:name, type:type, street:street};
          const result = [];

          for(const i in json_data)
              result.push([i,json_data [i]]);
          res.json(result);
      })
      .catch(function(err) {
          console.log(err);
      });
});

/*
//old version done on 6/4/19 without promise
router.get('/', (req, res, next) => {
    //API address from https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API
    const url = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49";
    request.get(url, (err, response, body) => {
        if (err) { return console.log(err); }
        const j_title = JSON.parse(body).title;
        const des = JSON.parse(body).description;
        const dir = JSON.parse(body).director;
        res.render('ps4', { title: 'PS4:Studio Ghibli API', j_title: j_title, des: des, dir: dir});
    });
});*/

module.exports = router;
