/**
 * Created by martins on 5/17/16.
 */
var expect = require('chai').expect;

var gameAPI = require('../lib/game/connect4_v2/gameUtils/gameFactory');

var gameContainer = {
    game: null,
    waitingGame: null
};


describe('Tests for newGame() method', function (done) {

    it('should check that newGame() returns a game object and initialized gameContainer.waitingGame with the game', function (done) {
        var returnedGame = gameAPI.newGame('TestPlayerName', gameContainer);
        expect(gameContainer.waitingGame).to.not.be.equal(null); //simpel test of null
        expect(gameContainer.waitingGame.player1).to.be.equal('TestPlayerName'); //test if the player set to the name, we gave in newGame?
        expect(returnedGame.player1).to.be.equal('TestPlayerName');
    });

    it('should check that newGame() second time it is called returns a game object initialized with the second player', function () {

        var returnedGame = gameAPI.newGame('TestPlayerName2', gameContainer);
        expect(gameContainer.waitingGame).to.be.equal(null);
        expect(gameContainer.game).to.not.be.equal(null);
        expect(gameContainer.game.player1).to.be.equal('TestPlayerName');
        expect(gameContainer.game.player2).to.be.equal('TestPlayerName2');
        expect(returnedGame.player1).to.be.equal('TestPlayerName');
        expect(returnedGame.player2).to.be.equal('TestPlayerName2');
    })
});



