var express = require('express');
var router = express.Router();
var mongoose = require("mongoose")
var Room = require("../utils/mongoose/models/room")


router.post('/', function(req, res, next) {
  var room = new Room({
    _id: new mongoose.Types.ObjectId(),
    roomcode: req.body.roomcode,
    roomname: req.body.roomname,
    roompswd: req.body.roompswd,
    hostname: req.body.hostname,
    songs: new mongoose.Types.Array
  })
    console.log(req.body)
  res.send('this is a test of a post response for HOSTING a room');
});


module.exports = router;