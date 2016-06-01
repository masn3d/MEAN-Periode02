var fs = require('fs');

function _makeTestFiles() {

//creates test dir called tempTestDir.
    fs.mkdirSync(__dirname + '/tempTestDir');

// creates file in tempTestDir called cars.
    fs.writeFileSync(__dirname + '/tempTestDir/cars');

//writes carTypes to cars file.
    fs.writeFile(__dirname + '/tempTestDir/cars', _getCarTypes().toString(), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

function _removeTestFiles() {
    // delete car file
    fs.unlinkSync(__dirname + '/tempTestDir/cars');
    //remove the tempTestDir directory
    fs.rmdirSync(__dirname + '/tempTestDir');
}

function _getCars(filePath, doneCallback) {

    setTimeout(function () {
        fs.readFile(filePath, function (err, cars) {
            // console.log("first");
            if (err) {
                return doneCallback(err);
            }
            doneCallback(null, cars);
        });
    }, 2000);
};

function _getCarTypes() {
    return ["Opel", "Nissan", "Volvo", "Tesla", "Ford", "Mercedes", "Citroen", "Porsche"];
}

module.exports = {
    getCars: _getCars,
    getCarTypes: _getCarTypes,
    makeTestFiles: _makeTestFiles,
    removeTestFiles: _removeTestFiles
}

