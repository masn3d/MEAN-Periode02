var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var model = require(path.join(__dirname, '/../', 'model', 'jokes.js'));
var router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));


router.get('/joke/random', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"joke": model.getRandomJoke()}))
});

router.get('/jokes', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"jokes": model.allJokes()}))
});

router.post('/addjoke', function (req, res, next) {
    var newJoke = req.body.newjoke;
    model.addJoke(newJoke);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"New joke added" : newJoke}))
    //res.end("{}")
});

module.exports = router;

