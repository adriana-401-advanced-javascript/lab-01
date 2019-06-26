'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function addition() {
  let sumTotal = 0;
  for (let i = 0; i < arguments.length; i++) {
    sumTotal += arguments[i];
  }
  if (typeof sumTotal !== 'number') { return undefined; }
  else { return sumTotal; }
};

arithmetic.subtract = function subtraction() {
  let minusTotal = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    minusTotal -= arguments[i];
  }
  if (typeof minusTotal !== 'number') { return undefined; }
  else { return minusTotal; }
};

arithmetic.multiply = function multiply() {
  let productTotal = 1;
  for (let i = 0; i < arguments.length; i++) {
    productTotal *= arguments[i];
  }
  if ((typeof productTotal !== 'number') || (isNaN(productTotal))) { return undefined; }
  else { return productTotal; }
};

arithmetic.divide = function (a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return undefined; }
  if( a === 0 || b === 0 ) { return undefined; }
  else { return a/b; }
};
