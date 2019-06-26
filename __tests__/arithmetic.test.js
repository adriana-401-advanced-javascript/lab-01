'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic addition', () => {
  it('can add any numbers', () => {
    expect(arithmetic.add(1,3)).toBe(1+3);
  });
});

describe('arithmetic addition', () => {
  it('hates words', () => {
    expect(arithmetic.add('friend')).toBe(undefined);
  });
});

describe('arithmetic subtraction', () => {
  it('can subtract any numbers', () => {
    expect(arithmetic.subtract(1,2)).toBe(1-2);
  });
});

describe('arithmetic subtraction', () => {
  it('hates words', () => {
    expect(arithmetic.subtract('hello')).toBe(undefined);
  });
});

describe('arithmetic multipliply', () => {
  it('can multiply any numbers', () => {
    expect(arithmetic.multiply(2,3)).toBe(2*3);
  });
});

describe('arithmetic multiply', () => {
  it('hates words', () => {
    expect(arithmetic.multiply('friend')).toBe(undefined);
  });
});

describe('arithmetic division', () => {
  it('can divide 2 numbers', () => {
    expect(arithmetic.divide(4,2)).toBe(2);
  });
});

describe('arithmetic division', () => {
  it('hates words', () => {
    expect(arithmetic.divide('hello')).toBe(undefined);
  });
});

describe('arithmetic division', () => {
  it('hates 0', () => {
    expect(arithmetic.divide(4,0)).toBe(undefined);
  });
});
