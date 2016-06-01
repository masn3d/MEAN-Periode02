/**
 * Created by martins
 */

// Problem-1 Understanding middleware

var express = require("express");
var bodyParser = require("body-parser");
var app = express();


app.use("/api/calculator/:operation/:n1/:n2", function (req, res, next) {
 	
    var calReq = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
    };
   req.cal = calReq;
   //res.send(calReq);
   next();
  
});

app.use(bodyParser.urlencoded({extended: false}));

app.get("/api/calculator/*", function (req, res) {
   var sum =  req.cal.n1 + req.cal.n2;
    res.send("TheSumIs: " + sum);
});


app.listen(3000, function () {
    console.log("Server started, listening on: " + 3000);
});
