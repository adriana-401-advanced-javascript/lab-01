'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

console.log(greet.hello('Susan'));

console.log(arithmetic.add(1,3,6));
console.log(arithmetic.subtract(1,3,6));
console.log(arithmetic.multiply(5,3,6));
console.log(arithmetic.divide(1,4));
