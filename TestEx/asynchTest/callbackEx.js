function usingCallback(x, callback) {
    callback(x);
}

function test(){
    var i = 0;
    while (i < 1000000000) {
        i++;
    }
}

function mySecondCallback(tal) {

    console.log(tal * tal * tal * tal);
    setTimeout(function () {
        console.log(tal * tal * tal * tal);
    }, 1000) //setTimeout er async, og derfor køre vores mySecondCallback også async.
}

function myCallback(tal) {
    console.log(tal * tal);
}

usingCallback(5, mySecondCallback);
usingCallback(10, myCallback);

