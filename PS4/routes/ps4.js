const express = require('express');
//remember to npm install request separately if there is an unresolved "request" error
const request = require('request');
const router = express.Router();

//new version with promise on 6/5/19
const doReq= function(){
    return new Promise(function (resolve,reject) {
        //API address from https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API
        const url = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49";
        request.get(url, (err, response, body) => {
            if (err) {reject(err);}
            else{resolve(body);}
        });
    })
};

router.get('/', (req, res, next) => {
  doReq()
      .then(function (body) {
          const j_title = JSON.parse(body).title;
          const des = JSON.parse(body).description;
          const dir = JSON.parse(body).director;
          res.render('ps4', { title: 'PS4:Studio Ghibli API', j_title: j_title, des: des, dir: dir});
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
