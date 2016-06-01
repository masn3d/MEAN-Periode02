/**
 * Created by martins on 5/17/16.
 */

function _add(n1, n2) {
    return n1 + n2;
}

function _subtract(n1, n2) {
    return n1 - n2;
}

function _multiply(n1, n2) {
    return n1 * n2;
}

function _devide(n1, n2) {
    if (n2 == 0) {
        throw new Error("Attempt to divide by zero");
    }
    return n1 / n2;
};

module.exports = {
    add: _add,
    subtract: _subtract,
    multiply: _multiply,
    devide: _devide
}