/**
 * Created by martins on 5/19/16.
 */
var expect = require("chai").expect;
var carTool = require("../carTools.js");

describe("Tests getCars, that uses readFile", function () {
    this.timeout(0);

    before(function () {
        carTool.makeTestFiles(); //makes tempoary folder with file that has a list of cartypes in it.
    });

    it("should give us a array with cars. Length should be 53", function (done) {

        carTool.getCars('tempTestDir/cars', function (err, cars) {
            expect(cars).to.not.be.null;
            expect(cars.length).to.be.equal(53);
            done();
        });
    });

    after(function () {
        carTool.removeTestFiles(); //removes tempoary folder and file.
    });
});
