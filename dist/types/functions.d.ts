export declare function isPrime(n: number): boolean;
export declare function isComposite(n: number): boolean;
export declare function isOdd(n: number): boolean | null;
export declare function isEven(n: number): boolean | null;
export declare function parity(n: number): string | null;
export declare function divisorCount(n: number): number;
export declare function isHighlyComposite(n: number): boolean;
export declare function divisors(n: number): number[];
/** Returns an array containing the 'amount' first multiples of 'n'.
 *
 * If 'n' is 0 it returns [0].
 * If 'amount' is a floating-point number it gets truncated.
 */
export declare function multiples(n: number, amount: number): number[];
/** The Fibonacci sequence.
 * @param {number} n - The amount of Fibonacci numbers you want.
 */
export declare function fibonacciSequence(n: number): number[];
/** Whether a number is a Fibonacci number or not.
 * @param {number} n - The number you want to query.
 */
export declare function isFibonacciNumber(n: number): boolean;
/**
 * Find the greatest common divisor of two or more integers.
 *
 * Returns undefined if it can't find the GCD.
 */
export declare function greatestCommonDivisor(numbers: number[]): number | null | undefined;
/** The least common multiple of two integers.
 *
 * Maximum LCM size: Number.MAX_SAFE_INTEGER - 1.
 */
export declare function leastCommonMultiple(numbers: number[]): number | null;
export declare function recamanSequence(n: number): number | number[] | null;
/** Returns the area of a circle.
 *
 * 'radius' is rounded to the nearest decimal in a two fractional digits fixed-point notation.
 */
export declare function circleArea(radius: number): number | null;
/** Returns the solution or solutions of a quadratic equation. */
export declare function quadraticFormula(a: number, b: number, c: number): number[] | number | null | undefined;
/**Returns the maximum number of pieces given 'n' cuts.
 *
 * If the optional parameter 'mode' is set to 'sequence' then
 * this function returns the lazy caterer's sequence with 'n' elements.
*/
export declare function lazyCaterer(n: number, mode?: string): number | number[] | null;
/**Returns the Look-and-say sequence with 'n' terms.*/
export declare function lookAndSaySequence(n: number): number[] | number | null;
/**Returns the average of a set of integers, floating-point numbers or both.
 *
 * The result is rounded to the nearest decimal and formatted like this: $.$$
*/
export declare function average(numbers: number[]): number | null;
//# sourceMappingURL=functions.d.ts.map