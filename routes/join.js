var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
  console.log(req.body)
  //setTimeout(() => {console.log("waiting 5 sec before sending response"), 5})
  res.send('this is a test of a post response for JOINING a room');
});


module.exports = router;