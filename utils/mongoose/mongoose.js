var mongoose = require('mongoose')

var mongoDb = process.env.MONGO_URL

mongoose.connect(mongoDb, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

var db = mongoose.connection

db.on("error", console.error.bind(console, "MongoDB connection error"))
console.log("test")