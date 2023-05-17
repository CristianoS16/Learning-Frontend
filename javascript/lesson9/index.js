let num1 = 42;
let num2 = 2.54213;

// Concat teo numbers
console.log(num1.toString() + num2)
// binary number
console.log(num1.toString(2))

// fixed 
console.log(num2.toFixed(2))

// integer?
console.log(Number.isInteger(num2))

// check NaN
let temp = num1 * "hello"
console.log(Number.isNaN(temp))

// float problem
let num3 = 0.7;
let num4 = 0.1;
let sum = num3 + num4
console.log(sum)
console.log(sum.toFixed(2))
console.log(Number.isInteger(sum))
sum = parseFloat(sum.toFixed(2))
console.log(sum)