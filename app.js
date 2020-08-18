var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var cors = require("cors");


// define route instances (maybe not correct phrasing but whatevs lol)
var indexRouter = require('./routes/index');
var hostRoomRouter = require("./routes/host")
var joinRoomRouter = require("./routes/join")

var app = express();

// mongoose connection
var mongoDb = process.env.MONGO_URL
mongoose.connect(mongoDb, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
var db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error"))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);
app.use("/host", hostRoomRouter)
app.use("/join", joinRoomRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
