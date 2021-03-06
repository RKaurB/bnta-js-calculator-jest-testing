const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
  oddOrEven,
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

  test("cannot divide by 0", () => {
    actual = divide(38, 0);
    // Use toBeNaN assertion method (https://jestjs.io/docs/expect)
    expect(actual).toBeNaN;
  })

});


// Describe block - testing modulus function
describe("modulus", () => {

  test("modulus can return remainder", () => {
    expected = 1;
    actual = modulus(3, 2);
    expect(actual).toBe(expected);
  }) 

  test("modulus can return 0 if no remainder", () => {
    expected = 0;
    actual = modulus(2, 2);
    expect(actual).toBe(expected);
  })

});


// Describe block - testing even function
describe("even", () => {

  // test("even returns true if number is even", () => {
  //   expected = true;
  //   actual = even(42);
  //   expect(actual).toBe(expected);
  // })

    // test("even returns false if number is odd", () => {
  //   expected = false;
  //   actual = even(17);
  //   expect(actual).toBe(expected);
  // })

  test("even returns true if number is even", () => {
    actual = even(42);
    // Use toBeTruthy assertion method (https://jestjs.io/docs/expect)
    expect(actual).toBeTruthy;
  })

  test("even returns false if number is odd", () => {
    actual = even(17);
    // Use toBeFalsy assertion method (https://jestjs.io/docs/expect)
    expect(actual).toBeFalsy;
  })

});


// Describe block - testing odd function
describe("odd", () => {

  // test("odd returns true if number is odd", () => {
  //   expected = true;
  //   actual = odd(43);
  //   expect(actual).toBe(expected);
  // })

  // test("odd returns false if number is even", () => {
  //   expected = false;
  //   actual = odd(18);
  //   expect(actual).toBe(expected);
  // })

  test("odd returns true if number is odd", () => {
    actual = odd(43);
    // Use toBeTruthy assertion method (https://jestjs.io/docs/expect)
    expect(actual).toBeTruthy;
  })

  test("odd returns false if number is even", () => {
    actual = odd(18);
    // Use toBeFalsy assertion method (https://jestjs.io/docs/expect)
    expect(actual).toBeFalsy;
  })

});


// Describe block - testing oddOrEven function
describe("oddOrEven", () => {

  test("oddOrEven returns even if number is even", () => {
    expected = "even";
    actual = oddOrEven(122);
    expect(actual).toBe(expected);
  })

  test("oddOrEven returns odd if number is odd", () => {
    expected = "odd";
    actual = oddOrEven(17);
    expect(actual).toBe(expected);
  })

});
