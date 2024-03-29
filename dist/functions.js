// Algorithms:
export function isPrime(n) {
    // If the input is a floating-point number, return false.
    if (n != Math.trunc(n))
        return false;
    if (n == 2 || n == 3)
        return true;
    if (n <= 1 || n % 2 == 0 || n % 3 == 0)
        return false;
    for (let i = 5; i * i <= n; i += 6)
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    return true;
}
export function isComposite(n) {
    // If the input is a floating-point number, return false.
    if (n != Math.trunc(n))
        return false;
    if (n <= 1 || n == 2 || n == 3)
        return false;
    if (n % 2 == 0 || n % 3 == 0)
        return true;
    for (let i = 5; i * i <= n; i += 6)
        if (n % i == 0 || n % (i + 2) == 0)
            return true;
    return false;
}
export function isOdd(n) {
    if (n !== Math.trunc(n)) {
        return null;
    }
    return !(n % 2 == 0);
}
export function isEven(n) {
    if (n !== Math.trunc(n)) {
        return null;
    }
    return (n % 2 == 0);
}
export function parity(n) {
    if (n !== Math.trunc(n)) {
        return null;
    }
    return (n % 2 == 0) ? "Even" : "Odd";
}
// Return the number of divisors a number has.
// Note: This function does not consider divisors of the opposite parity of the input.
export function divisorCount(n) {
    // If the input is a floating-point number, return 0.
    if (n != Math.trunc(n))
        return 0;
    // If the input is negative, convert it to a positive number.
    if (n < 0) {
        n = Math.abs(n);
    }
    let divisorCount = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            divisorCount++;
        }
    }
    return divisorCount;
}
export function isHighlyComposite(n) {
    // If the input is a floating-point number, return false.
    if (n != Math.trunc(n))
        return false;
    // A highly composite number must be a positive integer.
    if (n < 0) {
        return false;
    }
    // Corner case.
    if (n == 0) {
        return false;
    }
    // Get the number of divisors of n.
    const primaryDivisorCount = divisorCount(n);
    // Compare the number of divisors of every positive integer smaller than 'n'
    // against the number of divisors of 'n' to determine if 'n' is a highly composite number.
    for (let i = 1; i < n; i++) {
        let secondaryDivisorCount = divisorCount(i);
        if (primaryDivisorCount <= secondaryDivisorCount) {
            return false;
        }
    }
    return true;
}
// Return array of divisors of a number (precision is lost).
export function divisors(n) {
    let isNegative = false;
    // If the input is a floating-point number, return an empty array.
    if (n != Math.trunc(n))
        return [];
    // If the input is negative, convert it to a positive number.
    if (n < 0) {
        n = Math.abs(n);
        isNegative = true;
    }
    let divisors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            isNegative ? divisors.push(-Math.abs(i)) : divisors.push(i);
        }
    }
    return divisors;
}
/** Returns an array containing the 'amount' first multiples of 'n'.
 *
 * If 'n' is 0 it returns [0].
 * If 'amount' is a floating-point number it gets truncated.
 */
export function multiples(n, amount) {
    amount = Math.trunc(amount);
    if (amount <= 0) {
        return [];
    }
    if (n === 0) {
        return [0];
    }
    var multiples = [];
    for (let i = 0; i < amount; i++) {
        multiples.push(n * i);
    }
    if (n !== Math.trunc(n)) {
        multiples = multiples.map(e => {
            return (e !== Math.trunc(e)) ? parseFloat(e.toPrecision(3)) : e;
        });
    }
    return multiples;
}
/** The Fibonacci sequence.
 * @param {number} n - The amount of Fibonacci numbers you want.
 */
export function fibonacciSequence(n) {
    n = (n !== Math.trunc(n)) ? Math.trunc(n) : n;
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    var counter = n - 2;
    var fibonacciSequenceArray = [0, 1];
    for (let i = 0; i < counter; i++) {
        fibonacciSequenceArray.push(fibonacciSequenceArray[i] + fibonacciSequenceArray[i + 1]);
    }
    return fibonacciSequenceArray;
}
/** Whether a number is a Fibonacci number or not.
 * @param {number} n - The number you want to query.
 */
export function isFibonacciNumber(n) {
    if (n < 0) {
        return false;
    }
    if (n === 0 || n === 1) {
        return true;
    }
    var fibonacciSequenceArray = [0, 1];
    var i = 0;
    while (i < Number.MAX_SAFE_INTEGER) {
        fibonacciSequenceArray.push(fibonacciSequenceArray[i] + fibonacciSequenceArray[i + 1]);
        if (fibonacciSequenceArray[fibonacciSequenceArray.length - 1] === n) {
            return true;
        }
        if (fibonacciSequenceArray[fibonacciSequenceArray.length - 1] > n) {
            return false;
        }
        i++;
    }
    if (i === Number.MAX_SAFE_INTEGER) {
        throw new Error("'n' exceeded its maximum size.");
    }
    throw new Error("Something unexpected happened.");
}
/**
 * Find the greatest common divisor of two or more integers.
 *
 * Returns undefined if it can't find the GCD.
 */
export function greatestCommonDivisor(numbers) {
    if (numbers.length === 0 || numbers.length === 1) {
        return null;
    }
    // Check if there are any floating-point numbers.
    for (const e of numbers) {
        if (e !== Math.trunc(e)) {
            return null;
        }
    }
    allZerosCheck: {
        for (const e of numbers) {
            if (e !== 0) {
                break allZerosCheck;
            }
        }
        return 0;
    }
    // Ignore zeros and convert any negative integers to positive.
    numbers = numbers.filter(e => e !== 0)
        .map(e => Math.abs(e));
    var originalNumbers = [...numbers];
    // Only leave the smallest element in the array.
    while (numbers.length !== 1) {
        if (numbers[0] >= numbers[1]) {
            numbers.shift();
        }
        else {
            numbers.splice(1, 1);
        }
    }
    const numbersDivisors = [];
    for (const e of originalNumbers) {
        numbersDivisors.push(divisors(e));
    }
    // Filter the divisors of the integers in 'numbers'.
    const filteredNumbersDivisors = [];
    numbersDivisors.filter(function (array) {
        filteredNumbersDivisors.push(array.filter(e => e <= numbers[0]));
    });
    var currentGCD;
    outerLoop: for (let i = 1; i <= filteredNumbersDivisors[0].length; i++) {
        currentGCD = filteredNumbersDivisors[0][filteredNumbersDivisors[0].length - i];
        for (const e of filteredNumbersDivisors) {
            if (!e.includes(currentGCD)) {
                continue outerLoop;
            }
        }
        return currentGCD;
    }
    return undefined;
}
/** The least common multiple of two integers.
 *
 * Maximum LCM size: Number.MAX_SAFE_INTEGER - 1.
 */
export function leastCommonMultiple(numbers) {
    if (numbers.length < 2) {
        return null;
    }
    for (const e of numbers) {
        if (e !== Math.trunc(e)) {
            return null;
        }
    }
    for (const e of numbers) {
        if (e === 0) {
            return 0;
        }
    }
    numbers = numbers.map(e => Math.abs(e));
    // The LCM will always be greater than or equal to the largest number of the array.
    var currentLCM = Math.max(...numbers);
    for (let i = 0; ((i < numbers.length) && (currentLCM < Number.MAX_SAFE_INTEGER)); i++) {
        if (!(currentLCM % numbers[i] === 0)) {
            i = -1;
            currentLCM++;
        }
    }
    if (currentLCM === Number.MAX_SAFE_INTEGER) {
        throw new Error("The LCM exceeded its maximum size.");
    }
    return currentLCM;
}
// Recaman's sequence (A005132).
export function recamanSequence(n) {
    if (n !== Math.trunc(n)) {
        return null;
    }
    if (n <= 0) {
        return null;
    }
    if (n === 1) {
        return 0;
    }
    var sequence = [0, 1];
    let firstTry;
    for (let i = 2; (i < n) && (i < Number.MAX_SAFE_INTEGER); i++) {
        firstTry = sequence[i - 1] - i;
        if ((firstTry > 0) && (sequence.indexOf(firstTry) === -1)) {
            sequence.push(firstTry);
        }
        else {
            sequence.push(sequence[i - 1] + i);
        }
    }
    return sequence;
}
/** Returns the area of a circle.
 *
 * 'radius' is rounded to the nearest decimal in a two fractional digits fixed-point notation.
 */
export function circleArea(radius) {
    if (radius <= 0) {
        return null;
    }
    return parseFloat((Math.PI * (radius * radius)).toFixed(2));
}
/** Returns the solution or solutions of a quadratic equation. */
export function quadraticFormula(a, b, c) {
    if (a === 0) {
        return undefined;
    }
    if (a !== Math.trunc(a) || b !== Math.trunc(b) || c !== Math.trunc(c)) {
        return undefined;
    }
    const discriminant = Math.sqrt((b * b) - 4 * a * c);
    const solutionOne = (-b + discriminant) / (2 * a);
    const solutionTwo = (-b - discriminant) / (2 * a);
    if (discriminant === 0) {
        return parseFloat(solutionOne.toFixed(2));
    }
    // Square root of a negative number.
    if (discriminant.toString() === "NaN") {
        return null;
    }
    return [parseFloat(solutionOne.toFixed(2)), parseFloat(solutionTwo.toFixed(2))];
}
/**Returns the maximum number of pieces given 'n' cuts.
 *
 * If the optional parameter 'mode' is set to 'sequence' then
 * this function returns the lazy caterer's sequence with 'n' elements.
*/
export function lazyCaterer(n, mode = "formula") {
    if (n < 0) {
        return null;
    }
    if (n !== Math.trunc(n)) {
        return null;
    }
    if (mode === "sequence") {
        const sequence = [];
        for (let i = 0; i < n; i++) {
            sequence.push(((i ** 2) + i + 2) / 2);
        }
        return sequence;
    }
    if (n === 0) {
        return 1;
    }
    return ((n ** 2) + n + 2) / 2;
}
/**Returns the Look-and-say sequence with 'n' terms.*/
export function lookAndSaySequence(n) {
    if (n <= 0) {
        return null;
    }
    if (n !== Math.trunc(n)) {
        return null;
    }
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return [1, 11];
    }
    const sequence = [1, 11];
    let previousNumberArray = [];
    let previousDigit = "";
    let term = [];
    let currentCount = 1;
    // for loop on the last element of the 'sequence' array.
    for (let i = 1; i <= n - 2; i++) {
        previousNumberArray = Array.from(sequence[sequence.length - 1].toString());
        // for loop on each character of the last element.
        for (let i = 1; i < previousNumberArray.length; i++) {
            previousDigit = previousNumberArray[i - 1];
            if (previousNumberArray[i] === previousDigit) {
                currentCount += 1;
            }
            else {
                term.push(currentCount.toString());
                term.push(previousDigit);
                currentCount = 1;
            }
        }
        term.push(currentCount.toString());
        term.push(previousNumberArray[previousNumberArray.length - 1]);
        currentCount = 1;
        sequence.push(parseInt(term.toString().replaceAll(",", "")));
        term = [];
    }
    return sequence;
}
/**Returns the average of a set of integers, floating-point numbers or both.
 *
 * The result is rounded to the nearest decimal and formatted like this: $.$$
*/
export function average(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    let arraySum = 0;
    numbers.forEach(e => arraySum += e);
    return parseFloat((arraySum / numbers.length).toFixed(2));
}
