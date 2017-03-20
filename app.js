var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//set router
var router = express.Router();
//var index = require('./routes/index');
//var users = require('./routes/users');

//open db connection //@todo adjust to use mLab mongodb
//var db = require('./model/db');


//init app
var app = express();
/*-----------------------------------------*/


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //allow to perform post request

app.use(cookieParser());
//sass preprocessor
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false,
  sourceMap: true
}));
//use generated files in public folder
app.use(express.static(path.join(__dirname, 'public')));




//declare routs for use moved in controllers(routes*)
//app.use('/', index);
//app.use('/users', users);

//load constollers (router*)
app.use(require('./controllers'));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
