/**
 * Created by martins on 5/17/16.
 */
var expect = require("chai").expect;
var calculator = require('../lib/calculator');

describe('Test the calculator methods', function () {

    it('should return 15 since 7 + 8 = 15', function () {
        expect(calculator.add(7, 8)).to.be.equal(15);
    });
    it('should return 6 since 12 - 6 = 6', function () {
        expect(calculator.subtract(12, 6)).to.be.equal(6);
    });
    it('should return 35 since 5 * 7 = 35', function () {
        expect(calculator.multiply(5, 7)).to.be.equal(35);
    });
    it('should return 4 since 12 / 3 = 4', function () {
        expect(calculator.devide(12, 3)).to.be.equal(4);
    })
});
















