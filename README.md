# LAB - 01

### NODE ECOSYSTEM

### Author: Adriana Graybill

### Links and Resources
* [submission PR](https://github.com/adriana-401-advanced-javascript/lab-01/pull/3)
* [![Build Status](https://travis-ci.com/adriana-401-advanced-javascript/lab-01.svg?branch=master)](https://travis-ci.com/adriana-401-advanced-javascript/lab-01)

### Technology and Libraries Used
eslint
faker
jest

##### Good use of code - isNaN - Sneaky
`arithmetic.multiply = function multiply() {

  let productTotal = 1;

  for (let i = 0; i < arguments.length; i++) {

    productTotal *= arguments[i];

  }

  if ((typeof productTotal !== 'number') || (isNaN(productTotal))) { return undefined; }

  else { return productTotal; }

};`

#### Running the app
* `node index,js`
  
#### Tests
* How do you run tests?
  * `npm test`
* What assertions were made?
  * All the tests, greeting, and math
* What assertions need to be / should be made?
  * I think I am done, my tests could be a lot better, my code could be better too.

#### UML
![Picture](lab-01.png "VSC Screenshot")
