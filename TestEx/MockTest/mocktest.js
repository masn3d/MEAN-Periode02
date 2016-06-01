var nock = require('nock');
var expect = require('chai').expect;
var webTool = require(__dirname + '/tools/webtool.js');


describe("getWiki() suit", function () {

    before(function () {
        nock('https://en.wikipedia.org').get('/wiki/Chicago').reply(200, "Mock Chicago");
    });

    it("wiki() with MOCK", function (done) {
        webTool.getWiki(function (err, body) {
            expect(body).to.be.equal("Mock Chicago");
            done();
        });
    });
});

