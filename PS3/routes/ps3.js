var express = require('express');
var router = express.Router();

//Get
router.get('/', function(req, res, next) {
  res.render('ps3',{string:'What up bro!'});
});

//Post
router.post('/', function(req, res, next) {
  let str = 'Got it dude!';
  let len = str.length;
  //JSON object below, a string and length
  //res.json({string: str, length: len});
  res.render('ps3',{string:str,content:len})
});

module.exports = router;
