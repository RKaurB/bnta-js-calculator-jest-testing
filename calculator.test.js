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
describe("sum", () => {

  test("can add two small positive numbers", () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  // test.skip('can add two large positive numbers', () => {
  test("can add two large positive numbers", () => {
    expected = 968_000_000_000_000;
    actual = sum(500_000_000_000_000, 468_000_000_000_000);
    expect(actual).toBe(expected);
  });

  // test.skip('can add two negative numbers', () => {
  test("can add two negative numbers", () => {
    expected = -8;
    actual = sum(-5, -3);
    expect(actual).toBe(expected);
  });

  // test.skip('can add zero', () => {
  test("can add zero", () => {
    expected = 28;
    actual = sum(28, 0);
    expect(actual).toBe(expected);
  });

  test("can add decimal numbers", () => {
    expected = 28.3;
    actual = sum(15.1, 13.2);
    expect(actual).toBeCloseTo(expected);
  });

});

// Describe block - testing subtract function
describe("subtract", () => {

  test("can subtract a small positive number", () => {
    expected = 5;
    actual = subtract(8, 3);
    expect(actual).toBe(expected);
  });

  test("can subtract a large positive number", () => {
    expected = 468_000_000_000_000;
    actual = subtract(968_000_000_000_000, 500_000_000_000_000);
    expect(actual).toBe(expected);
  });

  test("can subtract a negative number", () => {
    expected = -5;
    actual = subtract(-8, -3);
    expect(actual).toBe(expected);
  });

  test("can subtract zero", () => {
    expected = 35;
    actual = subtract(35, 0);
    expect(actual).toBe(expected);
  });

  test("can subtract a decimal number", () => {
    expected = 2.25;
    actual = subtract(15.35, 13.10);
    expect(actual).toBeCloseTo(expected);
  });

});


// Describe block - testing multiply function
describe("multiply", () => {

  test("can multiply two small positive numbers", () => {
    expected = 8;
    actual = multiply(2, 4);
    expect(actual).toBe(expected);
  });

  test("can multiply two large positive numbers", () => {
    expected = 7_000_000_000_000;
    actual = multiply(2_000_000, 3_500_000 );
    expect(actual).toBe(expected);
  });

  test("can multiply two negative numbers", () => {
    expected = 24;
    actual = multiply(-8, -3);
    expect(actual).toBe(expected);
  });

  test("can multiply zero", () => {
    expected = 0;
    actual = multiply(122, 0);
    expect(actual).toBe(expected);
  });

  test("can multiply decimal numbers", () => {
    expected = 200.112;
    actual = multiply(15.16, 13.20);
    expect(actual).toBeCloseTo(expected);
  });

});


// Describe block - testing divide function
describe("divide", () => {

  test("can divide two small positive numbers", () => {
    expected = 8;
    actual = divide(16, 2);
    expect(actual).toBe(expected);
  });

  test("can divide two large positive numbers", () => {
    expected = 1.6;
    actual = divide(4_000_000_000, 2_500_000_000 );
    expect(actual).toBe(expected);
  });

  test("can divide two negative numbers", () => {
    expected = 3;
    actual = divide(-15, -5);
    expect(actual).toBe(expected);
  });

  test("can divide decimal numbers", () => {
    expected = 3.304;
    actual = divide(41.3, 12.5);
    expect(actual).toBeCloseTo(expected);
  });

});


// Describe block - testing modulus function
describe("modulus", () => {



});


// Describe block - testing even function
describe("even", () => {



});


// Describe block - testing odd function
describe("odd", () => {



});
