'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function add (...numbers) {
  return validArguments(numbers)
    ? numbers.reduce( (sum,val) => sum + val, 0)
    : null;
};

arithmetic.subtract = function subtraction() {
  let minusTotal = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    minusTotal -= arguments[i];
  }
  if (typeof minusTotal !== 'number') { return null; }
  else { return minusTotal; }
};

arithmetic.multiply = function multiply() {
  let productTotal = 1;
  for (let i = 0; i < arguments.length; i++) {
    productTotal *= arguments[i];
  }
  if ((typeof productTotal !== 'number') || (isNaN(productTotal))) { return null; }
  else { return productTotal; }
};

arithmetic.divide = function (a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  if( a === 0 || b === 0 ) { return null; }
  else { return a/b; }
};

function validArguments(args) {
  return args.length >= 2 && allValuesAreInts(args);
}

function allValuesAreInts(args) {
  return args.every( isNumeric );
}

function isNumeric(thing) {
  return typeof thing === 'number';
}
