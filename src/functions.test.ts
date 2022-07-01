import * as functions from "./functions";

// isOdd(n)
describe("Return whether a number is odd or not.", () => {
    it("Will throw an error for floating-point numbers.", () => {
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

    it("Will return if a number is odd regardless whether it's negative or not.", () => {
        expect(functions.isOdd(1)).toEqual(true);
        expect(functions.isOdd(2)).toEqual(false);

        expect(functions.isOdd(-1)).toEqual(true);
        expect(functions.isOdd(-2)).toEqual(false);
    });
});

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