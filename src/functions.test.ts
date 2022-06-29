import * as functions from "./functions.js";

// Because math algorithms are supposed to be straightforward, only one test suite will be used
// to describe all the algorithms and there will be only one test for each algorithm.
describe("Math algorithms.", () => {

    // TODO: Write a test for every algorithm and configure jest to use ESM.

    it("Will return the number of divisors a number has.", () => {
        expect(functions.divisorCount(-6n)).toEqual(4);
        expect(functions.divisorCount(0n)).toEqual(0);
        expect(functions.divisorCount(1n)).toEqual(1);
        expect(functions.divisorCount(936n)).toEqual(24);
    });

    it("Will return whether a number is a highly composite number or not.", () => {
        expect(functions.isHighlyComposite(-25n)).toEqual(true);
        expect(functions.isHighlyComposite(1n)).toEqual(true);
        expect(functions.isHighlyComposite(2n)).toEqual(true);
        expect(functions.isHighlyComposite(3n)).toEqual(false);
        expect(functions.isHighlyComposite(2520n)).toEqual(true);
    });

});