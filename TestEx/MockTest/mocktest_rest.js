/**
 * Created by martins on 5/20/16.
 */
var expect = require('chai').expect;
var nock = require("nock");
var angularAirline = require(__dirname + '/tools/webtool.js');
var date = new Date("2016-03-09");

var testReplyObj = {
    airline: 'AngularJS Airline MOCK',
    flights: [{
        flightID: '2215-0000000000000',
        numberOfSeats: 9000,
        date: '2016-03-09T08:00:00.000Z',
        totalPrice: 3400,
        traveltime: 60,
        origin: 'SXF',
        destination: 'CPH',
        flightNumber: 'COL2215'
    }]
};


var n = nock('http://angularairline-plaul.rhcloud.com');

describe('Test Flights API', function () {
    before(function (done) {

        n.get('/api/flightinfo/SXF/2016-03-09T00:00:00.000Z/4')
            .reply(200, testReplyObj);
        done();
    });

    it('Should get the flights', function (done) {

        angularAirline.getAvailTickets('SXF', new Date('2016-03-09T00:00:00.000Z'), 4, function (err, body) {
            var returnFlights = JSON.parse(body);
            //expect('AngularJS Airline MOCK').to.be.equal(body.airline);
            expect(returnFlights.airline).to.be.equal('AngularJS Airline MOCK');
            expect(returnFlights.flights[0].flightID).to.be.equal('2215-0000000000000');
            done();
        });
    });
});

//43ms
//460ms