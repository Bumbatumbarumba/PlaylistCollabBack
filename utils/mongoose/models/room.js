var mongoose = require('mongoose')

var roomSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    roomcode: String,
    roomname: String,
    roompswd: String,
    hostname: String,
    hostcode: String,
    songs: mongoose.Types.Array
})

module.exports = mongoose.model("Room", roomSchema)