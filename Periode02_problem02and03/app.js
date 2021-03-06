var express = require('express');
var session = require("express-session");
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var rest = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(session({secret: 'secret_3162735', saveUninitialized: true, resave: true}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//---------------------------------SESSION-------------------------------------------

//Sessions Check
app.use(function (req, res, next) {

    //This form of session tracking, were we save the users behavior on the site, is not "strictly necessary", which means
    //we need consent from the user. Read more in the CookieLaw html.
    console.log('-joke: ' + req.session.joke + ' -jokes: ' + req.session.jokes + ' -storeJokes: ' + req.session.storejoke);

    if (req.session.userName || req.url.substring(0, 5) == '/api/') {
        return next();
    }
    else if (req.body.userName) {
        req.session.userName = req.body.userName;
        req.session.joke = 0;
        req.session.jokes = 0;
        req.session.storejoke = 0;
        return res.redirect("/");
    }
    else if (!req.body.userName) {
        req.url = "/login";
        return next();
    }
});

//---------------------------------SESSION------------------------------------

app.use('/', routes);
app.use('/api', rest);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


//app.listen(3000);
module.exports = app;
