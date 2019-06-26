'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic addition', () => {
  it('can add 2 numbers', () => {
    expect(arithmetic.add()).toBe();
  });
});

describe('arithmetic addition', () => {
  it('hates words', () => {
    expect(arithmetic.add('friend')).toBe(null);
  });
});

describe('arithmetic addition', () => {
  it('can add 2 numbers', () => {
    expect(arithmetic.subtract(1,2)).toBe(1+2);
  });
});

describe('arithmetic addition', () => {
  it('hates words', () => {
    expect(arithmetic.subtract('hello','friend')).toBe(null);
  });
});
