// (Anonymous) sum function - sums two numbers
const sum = function(num1, num2) {
    return num1 + num2;
};
// Call function
console.log(sum(1, 3));

// (Arrow) sum function
// const sumArrow = (num1, num2) => num1 + num2;
// console.log(sumArrow(1, 3));


// Subtract function - subtracts second number from first number
const subtract = function(num1, num2) {
    return num1 - num2;
};
// Call function
console.log(subtract(7, 2));


// Multiply function - multiplies two numbers
const multiply = function(num1, num2) {
    return num1 * num2;
};
// Call function
console.log(multiply(2,10));


// Divide function - divides first number by second number
const divide = function(num1, num2) {
    return num1 / num2;
};
// Call function
console.log(divide(5, 2));


// Modulus function - returns remainder of first number divided by second number
const modulus = function(num1, num2) {
    return num1 % num2;
};
// Call function
console.log(modulus(3, 2));


// Even function - returns true if number is even, false if not even
const even = function(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
};
// Call function
console.log(even(8));
console.log(even(7));


// Odd function - returns true if number is odd, false if not odd
const odd = function(num) {
    if (num % 2 !== 0) {
        return true;
    } else {
        return false;
    }
};
// Call function
console.log(odd(8));
console.log(odd(7));


module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
