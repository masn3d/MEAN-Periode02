var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var model = require(path.join(__dirname, '/../', 'model', 'jokes.js'));
//var model = require('./../model/jokes.js');
var router = express.Router();


router.use(bodyParser.urlencoded({extended: false}));

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Index', username: req.session.userName});
});

router.get("/login", function (req, res) {
    res.render('login', {title: 'LoginPage'});
});

router.get("/alljokes", function (req, res) {
    req.session.jokes++;
    res.render('alljokes', {title: 'AllJokePage', jokes: model.allJokes()});
});

router.get("/joke", function (req, res) {
    req.session.joke++;
    res.render('joke', {title: 'RandomJokePage', joke: model.getRandomJoke()});
});

router.get("/addjoke", function (req, res) {
    req.session.storejoke++;
    res.render('addjoke', {title: 'AddJokePage'});
});


router.post("/addjoke", function (req, res) {
    var newJoke = req.body.newjoke;
    model.addJoke(newJoke);
    res.send("You added the joke: " + newJoke);
});




module.exports = router;
