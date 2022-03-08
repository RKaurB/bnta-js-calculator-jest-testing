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

  test("can subtract two small positive numbers", () => {
    expected = 5;
    actual = subtract(8, 3);
    expect(actual).toBe(expected);
  });

  test("can subtract two large positive numbers", () => {
    expected = 468_000_000_000_000;
    actual = subtract(968_000_000_000_000, 500_000_000_000_000);
    expect(actual).toBe(expected);
  });

  test("can subtract two negative numbers", () => {
    expected = -5;
    actual = subtract(-8, -3);
    expect(actual).toBe(expected);
  });

  test("can subtract zero", () => {
    expected = 35;
    actual = subtract(35, 0);
    expect(actual).toBe(expected);
  });

  test("can subtract decimal numbers", () => {
    expected = 2.25;
    actual = subtract(15.35, 13.10);
    expect(actual).toBeCloseTo(expected);
  });

});

describe("multiply", () => {});

describe("divide", () => {});

describe("modulus", () => {});

describe("even", () => {});

describe("odd", () => {});
