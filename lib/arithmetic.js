'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function addition() {
  let sumTotal = 0;
  for (let i = 0; i < arguments.length; i++) {
    sumTotal += arguments[i];
  }
  if (typeof sumTotal !== 'number') { return null; }
  else { console.log(sumTotal); }
};

arithmetic.subtract = function subtraction() {
  let minusTotal = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    minusTotal -= arguments[i];
  }
  if (typeof minusTotal !== 'number') { return null; }
  else { console.log(minusTotal); }
};

arithmetic.multiply = function multiply() {
  let productTotal = 1;
  for (let i = 0; i < arguments.length; i++) {
    productTotal *= arguments[i];
  }
  if (typeof productTotal !== 'number') { return null; }
  else { console.log(productTotal); }
};

arithmetic.divide = function (a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  if( a === 0 || b === 0 ) { return null; }
  else { console.log(a/b); }
};
