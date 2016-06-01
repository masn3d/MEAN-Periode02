/**
 * Created by martins on 5/19/16.
 */
var request = require("request");
var URL = "https://en.wikipedia.org/wiki/Chicago";

function _getWiki(callback) {

    request(URL, function (err, res, body) {
        if (err || res.statusCode >= 400) {
            return callback(err || body);
        }
        callback(null, body);
    });
};

//---------------------------------------REST-Test-Request------------------------------------------
var request = require("request");
//This is how you call the API
//http://angularairline-plaul.rhcloud.com/api/flightinfo/SXF/2016-03-09T00:00:00.000Z/4
function getAvailableTickets(airport, date, numbOfTickets, callback) {
    var isoDate = date.toISOString();
    var URL = "http://angularairline-plaul.rhcloud.com/api/flightinfo/" + airport + "/" + isoDate + "/" + numbOfTickets;
    request(URL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            return callback(null, body);
        }
        else {
            return callback(error, body);
        }
    });
}

//JSON.parse(body)
//---------------------------------------REST-Test-Request------------------------------------------


module.exports = {
    getWiki: _getWiki, //for normal http request mock test.
    getAvailTickets: getAvailableTickets //for REST mock test
}