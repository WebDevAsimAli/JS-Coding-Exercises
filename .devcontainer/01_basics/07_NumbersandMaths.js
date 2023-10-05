// ++++++++++++++++  Numbers   ++++++++++++
const score = 200
// console.log(score);

const newValue = new Number(200)
// console.log(newValue);

// some methodsof numbers
// console.log(newValue.toString().length);

// After fraction how many digits you want 
// console.log(newValue.toFixed(2));

const otherValue = 1342.89
// console.log(otherValue.toPrecision(5));

// Methods for good representaions of numbers

const monthlySal = 100000
// console.log(monthlySal.toLocaleString());
// console.log(monthlySal.toLocaleString("en-IN"));

// ++++++++++++++++ Maths +++++

// console.log(Math);
// console.log(Math.abs(-9));

// console.log(Math.round(6.7));
// console.log(Math.ceil(5.4));
// console.log(Math.floor(5.9));
// console.log(Math.min(5,2,9));
// console.log(Math.max(3,9,1,6));

// Mostly used method of Math function is random, and the value of random is always between 0 and 1

console.log(Math.random())
console.log((Math.random() * 10) +1);
console.log(Math.floor(Math.random() *10) +1);

min = 10
max = 20
console.log(Math.floor(Math.random()  * (max - min +1 )) + min)

