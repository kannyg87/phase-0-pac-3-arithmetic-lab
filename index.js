function add() {
    return "add"
}

function subtract() {
    return "subtract"
}

function multiply() {
    return "multiply"
}

function divide() {
    return "divide"
}

function add(a,b) {
    return a+b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function increment(a) {
    return a+1
}

function decrement(a) {
    return a - 1
}

function makeInt(a) {
    return parseInt(a, 10);
}


function preserveDecimal(a) {
    return parseFloat(a);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    increment,
    decrement,
    makeInt,
    preserveDecimal,

}




