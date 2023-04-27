function addNumbers(num1, num2) {
    return num1 + num2;
}

function subtractNumbers(num1, num2) {
    return num1 - num2;
}

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

function divideNumbers(num1, num2) {
    return num1 / num2;
}

function exponentNumbers(num1, num2) {
    return num1 ** num2;
}

console.log("add numbers 15 + 25: ", addNumbers(15,25))
console.log("subtract numbers 63 - 45: ", subtractNumbers(63,45))
console.log("multiply numbers 15 * 6: ", multiplyNumbers(15,6))
console.log("divide numbers 75 / 25: ",divideNumbers(75,25))
console.log("raise to power 15 ^ 4: ", exponentNumbers(15,4))

module.exports = {addNumbers, subtractNumbers, multiplyNumbers, divideNumbers, exponentNumbers}