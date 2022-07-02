import * as functions from "./functions";

// isPrime(n)
describe("Return whether a number is prime or not", () => {

    it("Will return false for floating-point numbers.", () => {
        expect(functions.isPrime(1.1)).toEqual(false);
        expect(functions.isPrime(1.2)).toEqual(false);

        expect(functions.isPrime(-1.1)).toEqual(false);
        expect(functions.isPrime(-1.2)).toEqual(false);

        expect(functions.isPrime(2.1)).toEqual(false);
        expect(functions.isPrime(2.2)).toEqual(false);
    });

    it("Will return false for negative integers.", () => {
        expect(functions.isPrime(-1)).toEqual(false);
        expect(functions.isPrime(-25)).toEqual(false);
    });

    it("Will return false if the number is 0.", () => {
        expect(functions.isPrime(0)).toEqual(false);
    });

    it("Will return true for positive integers that are prime numbers.", () => {
        expect(functions.isPrime(2)).toEqual(true);
        expect(functions.isPrime(3)).toEqual(true);
        expect(functions.isPrime(5)).toEqual(true);
        expect(functions.isPrime(83)).toEqual(true);

        expect(functions.isPrime(5.0)).toEqual(true);
        expect(functions.isPrime(83.00)).toEqual(true);
    });
});

// isComposite(n)
describe("Return whether a number is composite or not", () => {
    it("Will return false for floating-point numbers.", () => {
        expect(functions.isComposite(1.1)).toEqual(false);
        expect(functions.isComposite(1.2)).toEqual(false);

        expect(functions.isComposite(-1.1)).toEqual(false);
        expect(functions.isComposite(-1.2)).toEqual(false);

        expect(functions.isComposite(2.1)).toEqual(false);
        expect(functions.isComposite(2.2)).toEqual(false);
    });

    it("Will return false for negative integers.", () => {
        expect(functions.isComposite(-1)).toEqual(false);
        expect(functions.isComposite(-25)).toEqual(false);
    });

    it("Will return false if the number is 0.", () => {
        expect(functions.isComposite(0)).toEqual(false);
    });

    it("Will return true for positive integers that are composite numbers.", () => {
        expect(functions.isComposite(4)).toEqual(true);
        expect(functions.isComposite(6)).toEqual(true);
        expect(functions.isComposite(8)).toEqual(true);
        expect(functions.isComposite(82)).toEqual(true);

        expect(functions.isComposite(8.0)).toEqual(true);
        expect(functions.isComposite(82.00)).toEqual(true);
    });
});

// isOdd(n)
describe("Return whether a number is odd or not.", () => {
    it("Will throw for floating-point numbers.", () => {
        expect(() => functions.isOdd(1.1)).toThrow();
        expect(() => functions.isOdd(1.2)).toThrow();

        expect(() => functions.isOdd(-1.1)).toThrow();
        expect(() => functions.isOdd(-1.2)).toThrow();

        expect(() => functions.isOdd(2.1)).toThrow();
        expect(() => functions.isOdd(2.2)).toThrow();
    });

    it("Will return false for 0.", () => {
        expect(functions.isOdd(0)).toEqual(false);
    });

    it("Will return if an integer is odd regardless of whether it's negative or positive.", () => {
        expect(functions.isOdd(1)).toEqual(true);
        expect(functions.isOdd(2)).toEqual(false);

        expect(functions.isOdd(-1)).toEqual(true);
        expect(functions.isOdd(-2)).toEqual(false);
    });
});

// isEven(n)
describe("Return whether a number is even or not.", () => {
    it("Will throw for floating-point numbers.", () => {
        expect(() => functions.isEven(1.1)).toThrow();
        expect(() => functions.isEven(1.2)).toThrow();

        expect(() => functions.isEven(-1.1)).toThrow();
        expect(() => functions.isEven(-1.2)).toThrow();

        expect(() => functions.isEven(2.1)).toThrow();
        expect(() => functions.isEven(2.2)).toThrow();
    });

    it("Will return true for 0.", () => {
        expect(functions.isEven(0)).toEqual(true);
    });

    it("Will return if an integer is even regardless of whether it's negative or positive.", () => {
        expect(functions.isEven(1)).toEqual(false);
        expect(functions.isEven(2)).toEqual(true);

        expect(functions.isEven(-1)).toEqual(false);
        expect(functions.isEven(-2)).toEqual(true);
    });
});

// parity(n)
describe("Return the parity of a number.", () => {
    it("Will throw for floating-point numbers.", () => {
        expect(() => functions.parity(1.1)).toThrow();
        expect(() => functions.parity(1.2)).toThrow();

        expect(() => functions.parity(-1.1)).toThrow();
        expect(() => functions.parity(-1.2)).toThrow();

        expect(() => functions.parity(2.1)).toThrow();
        expect(() => functions.parity(2.2)).toThrow();
    });

    it("Will return 'Even' for 0.", () => {
        expect(functions.parity(0)).toEqual("Even");
    });

    it("Will return the parity of an integer regardless of whether it's negative or positive.", () => {
        expect(functions.parity(1)).toEqual("Odd");
        expect(functions.parity(2)).toEqual("Even");

        expect(functions.parity(-1)).toEqual("Odd");
        expect(functions.parity(-2)).toEqual("Even");
    });
});

// divisorCount(n)
describe("Return the number of divisors a number has.", () => {

    it("Will return 0 for floating-point numbers.", () => {
        expect(functions.divisorCount(1.1)).toEqual(0);
        expect(functions.divisorCount(1.2)).toEqual(0);

        expect(functions.divisorCount(-1.1)).toEqual(0);
        expect(functions.divisorCount(-1.2)).toEqual(0);

        expect(functions.divisorCount(2.1)).toEqual(0);
        expect(functions.divisorCount(2.2)).toEqual(0);
    });

    it("Will treat negative integers as positive and only return the number of positive divisors.", () => {
        expect(functions.divisorCount(-1)).toEqual(1);
        expect(functions.divisorCount(-25)).toEqual(3);

        expect(functions.divisorCount(-1.0)).toEqual(1);
        expect(functions.divisorCount(-25.00)).toEqual(3);
    });

    it("Will return 0 if the number is 0.", () => {
        expect(functions.divisorCount(0)).toEqual(0);
    });

    it("Will return the number of positive divisors of a positive integer.", () => {
        expect(functions.divisorCount(1)).toEqual(1);
        expect(functions.divisorCount(25)).toEqual(3);

        expect(functions.divisorCount(1.0)).toEqual(1);
        expect(functions.divisorCount(25.00)).toEqual(3);
    });
});

// isHighlyComposite(n)
describe("Return whether a number is highly composite or not.", () => {

    it("Will return false for floating-point numbers.", () => {
        expect(functions.isHighlyComposite(1.1)).toEqual(false);
        expect(functions.isHighlyComposite(1.2)).toEqual(false);

        expect(functions.isHighlyComposite(-1.1)).toEqual(false);
        expect(functions.isHighlyComposite(-1.2)).toEqual(false);

        expect(functions.isHighlyComposite(2.1)).toEqual(false);
        expect(functions.isHighlyComposite(2.2)).toEqual(false);
    });

    it("Will return false for negative integers.", () => {
        expect(functions.isHighlyComposite(-1)).toEqual(false);
        expect(functions.isHighlyComposite(-25)).toEqual(false);
    });

    it("Will return false if the number is 0.", () => {
        expect(functions.isHighlyComposite(0)).toEqual(false);
    });

    it("Will return false for positive integers that are not highly composite numbers.", () => {
        expect(functions.isHighlyComposite(3)).toEqual(false);
        expect(functions.isHighlyComposite(5)).toEqual(false);
        expect(functions.isHighlyComposite(32)).toEqual(false);
    });

    it("Will return true for highly composite numbers.", () => {
        expect(functions.isHighlyComposite(1)).toEqual(true);
        expect(functions.isHighlyComposite(2)).toEqual(true);
        expect(functions.isHighlyComposite(4)).toEqual(true);

        expect(functions.isHighlyComposite(6.0)).toEqual(true);
        expect(functions.isHighlyComposite(12.00)).toEqual(true);
    });
});

// divisors(n)
describe("Return an array containing the divisors of a number.", () => {

    it("Will return an empty array for floating-point numbers.", () => {
        expect(functions.divisors(1.1)).toEqual([]);
        expect(functions.divisors(1.2)).toEqual([]);
    
        expect(functions.divisors(-1.1)).toEqual([]);
        expect(functions.divisors(-1.2)).toEqual([]);
    
        expect(functions.divisors(2.1)).toEqual([]);
        expect(functions.divisors(2.2)).toEqual([]);
    });
    
    it("Will return the negative divisors of a negative integer.", () => {
        expect(functions.divisors(-1)).toEqual([-1]);
        expect(functions.divisors(-25)).toEqual([-1, -5, -25]);
    
        expect(functions.divisors(-1.0)).toEqual([-1]);
        expect(functions.divisors(-25.00)).toEqual([-1, -5, -25]);
    });
    
    it("Will return an empty array if the number is 0.", () => {
        expect(functions.divisors(0)).toEqual([]);
    });
    
    it("Will return the positive divisors of a positive integer.", () => {
        expect(functions.divisors(1)).toEqual([1]);
        expect(functions.divisors(25)).toEqual([1, 5, 25]);

        expect(functions.divisors(1.0)).toEqual([1]);
        expect(functions.divisors(25.00)).toEqual([1, 5, 25]);
    });
});

// multiples(n, amount)
describe("Return a specified amount of the multiples of a number.", () => {
    it("Will return multiples of floating-point numbers with the precision set to 3.", () => {
        expect(functions.multiples(1.1, 10)).toEqual([0, 1.10, 2.20, 3.30, 4.40, 5.50, 6.60, 7.70, 8.80, 9.90]);
        expect(functions.multiples(1.2, 7)).toEqual([0, 1.20, 2.40, 3.60, 4.80, 6, 7.20]);

        expect(functions.multiples(-1.1, 13)).toEqual([-0, -1.10, -2.20, -3.30, -4.40, -5.50, -6.60, -7.70,
                                                       -8.80, -9.90, -11, -12.1, -13.2]);
        expect(functions.multiples(-1.2, 3)).toEqual([-0, -1.20, -2.40]);

        expect(functions.multiples(2.1, 2)).toEqual([0, 2.10]);
        expect(functions.multiples(2.2, 5)).toEqual([0, 2.20, 4.40, 6.60, 8.80]);
    });

    it("Will return an empty array if the amount of multiples chosen is less than or equal to 0.", () => {
        expect(functions.multiples(0, 0)).toEqual([]);
        expect(functions.multiples(0, -67)).toEqual([]);

        expect(functions.multiples(42, 0)).toEqual([]);
        expect(functions.multiples(2, -4)).toEqual([]);
    });

    it("Will return [0] if the number is 0 or -0", () => {
        expect(functions.multiples(0, 363)).toEqual([0]);
        expect(functions.multiples(-0, 2)).toEqual([0]);
    });

    it("Will return multiples of an integer, regardless of whether it's negative or positive.", () => {
        expect(functions.multiples(2, 1)).toEqual([0]);
        expect(functions.multiples(4, 3)).toEqual([0, 4, 8]);
        expect(functions.multiples(30, 10)).toEqual([0, 30, 60, 90, 120, 150, 180, 210, 240, 270]);

        expect(functions.multiples(-7, 4)).toEqual([-0, -7 , -14 , -21]);
        expect(functions.multiples(-23, 7)).toEqual([-0, -23, -46, -69, -92, -115, -138]);
        expect(functions.multiples(-573, 22)).toEqual([-0, -573, -1146, -1719, -2292, -2865, -3438, -4011,
                                                      -4584, -5157, -5730, -6303, -6876, -7449, -8022, -8595,
                                                      -9168, -9741, -10314, -10887, -11460, -12033]);
    });
});
    
// fibonacciSequence(n)
describe("Return a specified amount of Fibonacci numbers.", () => {

    it("Will truncate the input if it's a floating-point number.", () => {
        expect(functions.fibonacciSequence(8.2)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
        expect(functions.fibonacciSequence(8.7)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });

    it("Will return an empty array if the specified amount is less than or equal to 0.", () => {
        expect(functions.fibonacciSequence(0)).toEqual([]);
        expect(functions.fibonacciSequence(-0)).toEqual([]);

        expect(functions.fibonacciSequence(-373)).toEqual([]);
        expect(functions.fibonacciSequence(-1)).toEqual([]);
    });

    it("Will return the specified amount of Fibonacci numbers if called with a positive number", () => {
        expect(functions.fibonacciSequence(1)).toEqual([0]);
        expect(functions.fibonacciSequence(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });
});

// isFibonacciNumber(n)
describe("Return whether a number is a Fibonacci number or not.", () => {

    it("Will return false for negative numbers.", () => {
        expect(functions.isFibonacciNumber(-4)).toEqual(false);
        expect(functions.isFibonacciNumber(-543520138544)).toEqual(false);
    });

    it("Will return false for floating-point numbers.", () => {
        expect(functions.isFibonacciNumber(1.1)).toEqual(false);
        expect(functions.isFibonacciNumber(2.2)).toEqual(false);
    });
        
    it("Will return false for positive integers that are not Fibonacci numbers.", () => {
        expect(functions.isFibonacciNumber(4)).toEqual(false);
        expect(functions.isFibonacciNumber(11)).toEqual(false);
        expect(functions.isFibonacciNumber(7549083454753)).toEqual(false);
    });

    it("Will return true for positve integers that are Fibonacci numbers.", () => {
        expect(functions.isFibonacciNumber(0)).toEqual(true);
        expect(functions.isFibonacciNumber(21)).toEqual(true);
        expect(functions.isFibonacciNumber(12200160415121877000)).toEqual(true);
    });
});