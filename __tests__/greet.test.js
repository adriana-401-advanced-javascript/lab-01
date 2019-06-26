'use strict';

const greet = require('../lib/greet.js');

describe('greeting string', () => {
  it('can take a string', () => {
    expect(greet.hello('Megan')).toBe('Hello, Megan');
  });
});

describe('greeting string', () => {
  it('cant take anything that is not a string', () => {
    expect(greet.hello(7)).toBe(null);
  });
});
