/**
 * Created by martins on 4/13/16.
 */
var ran = require("random-js")();

var jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
];

function _getRandomJoke(){
    var randomIndex = ran.integer(0, jokes.length-1);
    return jokes[randomIndex];
};

function _addJoke(newJoke){
    jokes.push(newJoke);
};

function _allJokes(){
    return jokes;
};

module.exports = {
    allJokes : _allJokes,
    getRandomJoke : _getRandomJoke,
    addJoke : _addJoke
};