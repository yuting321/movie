var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var index = require('./routes/index');
var users = require('./routes/users');
var app = express();
var login = require('./routes/login');
var signup = require('./routes/sign-up');
var seats = require('./routes/seats');
var setpwd = require('./routes/setpwd');
var personal =require('./routes/personal');
var list =require('./routes/list');
var area = require('./routes/area');
var detail = require('./routes/detail');
var tickets = require('./routes/tickets');


app.engine('hbs', exphbs({
  layoutsDir: 'views',
  defaultLayout: 'layout',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/login',login);
app.use('/seats',seats);
app.use('/signup',signup);
app.use('/setpwd',setpwd);
app.use('/personal',personal);
app.use('/list',list);
app.use('/area',area);
app.use('/detail',detail);
app.use('/tickets',tickets);


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
