function sum(a, b) {
    return a + b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }

    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function isEven(value) {
    return value % 2 === 0;
}

function getUserInfo(name, age) {
    return {
        name,
        age,
        isAdult: age >= 18
    };
}

module.exports = { sum, divide, multiply, getUserInfo, isEven };
