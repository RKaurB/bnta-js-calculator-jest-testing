const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");


// Describe block - testing sum function
describe('sum', () => { 

  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  // test.skip('can add two large positive numbers', () => {
  test('can add two large positive numbers', () => { 
    expected = 968_000_000_000_000;
    actual = sum(500_000_000_000_000, 468_000_000_000_000);
    expect(actual).toBe(expected);
  });

  // test.skip('can add two negative numbers', () => {
    test('can add two negative numbers', () => {
    expected = -8;
    actual = sum(-5, -3);
    expect(actual).toBe(expected);
  });

  // test.skip('can add zero', () => {
  test('can add zero', () => {
    expected = 28;
    actual = sum(28, 0);
    expect(actual).toBe(expected);
  });

  test('can add decimal numbers', () => {
    expected = 28.3;
    actual = sum(15.1, 13.2);
    expect(actual).toBeCloseTo(expected);
  });

});


describe('subtract', () => {
});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
