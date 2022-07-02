// Algorithms:

export function isPrime(n: number): boolean {
    // If the input is a floating-point number, return false.
    if (n != Math.trunc(n))
        return false;

    if (n == 2 || n == 3)
        return true;
    if (n <= 1 || n % 2 == 0 || n % 3 == 0)
        return false;  
    for (let i = 5; i * i <= n ; i+=6)
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    return true;
  }

export function isComposite(n: number): boolean {
    // If the input is a floating-point number, return false.
    if (n != Math.trunc(n))
        return false;

    if (n <= 1 || n == 2 || n == 3)
        return false;
    if (n % 2 == 0 || n % 3 == 0)
        return true;  
    for (let i = 5; i * i <= n ; i+=6)
        if (n % i == 0 || n % (i + 2) == 0)
            return true;
    return false;
}

export function isOdd(n: number): boolean {
    if (n != Math.trunc(n))
        throw new Error("Cannot determine whether a floating-point number is odd.");
    return !(n % 2 == 0);  
}

export function isEven(n: number): boolean {
    if (n != Math.trunc(n))
        throw new Error("Cannot determine whether a floating-point number is even.");
    return (n % 2 == 0);
}

export function parity(n: number): string {
    if (n != Math.trunc(n))
        throw new Error("Cannot determine the parity of a floating-point number.");
    return (n % 2 == 0) ? "Even" : "Odd";
}

// Return the number of divisors a number has.
// Note: This function does not consider divisors of the opposite parity of the input.
export function divisorCount(n: number): number {
    // If the input is a floating-point number, return 0.
    if (n != Math.trunc(n))
        return 0;

    // If the input is negative, convert it to a positive number.
    if (n < 0) {
        n = Math.abs(n);
    }

    let divisorCount: number = 0;
    for (let i: number = 1; i <= n; i++) {
        if (n % i == 0) { divisorCount++; }
    }
    return divisorCount;
}

export function isHighlyComposite(n: number): boolean {
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
    const primaryDivisorCount: number = divisorCount(n)

    // Compare the number of divisors of every positive integer smaller than 'n'
    // against the number of divisors of 'n' to determine if 'n' is a highly composite number.
    for (let i: number = 1; i < n; i++) {
        let secondaryDivisorCount: number = divisorCount(i);
        if (primaryDivisorCount <= secondaryDivisorCount) {
            return false;
        }
    }
    return true;
}

// Return array of divisors of a number (precision is lost).
export function divisors(n: number): number[] {
    let isNegative: boolean = false;
    // If the input is a floating-point number, return an empty array.
    if (n != Math.trunc(n))
        return [];

    // If the input is negative, convert it to a positive number.
    if (n < 0) {
        n = Math.abs(n);
        isNegative = true;
    }

    let divisors: number[] = [];
    for (let i: number = 1; i <= n; i++) {
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
export function multiples(n: number, amount: number): number[] {

    amount = Math.trunc(amount);

    if (amount <= 0) {
        return [];
    }

    if (n === 0) {
        return [0];
    }

    var multiples: number[] = [];
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
export function fibonacciSequence(n: number): number[] {
    n = (n !== Math.trunc(n)) ? Math.trunc(n) : n;

    if (n <= 0) {
        return [];
    }
    
    if (n === 1) {
        return [0];
    }
    var counter: number = n - 2;
    var fibonacciSequenceArray: number[] = [0, 1];
    for (let i = 0; i < counter; i++) {
        fibonacciSequenceArray.push(fibonacciSequenceArray[i] + fibonacciSequenceArray[i + 1]);
    }
    return fibonacciSequenceArray;
}

/** Whether a number is a Fibonacci number or not.
 * @param {number} n - The number you want to query.
 */
export function isFibonacciNumber(n: number): boolean {
    if (n < 0) {
        return false;
    }
    
    if (n === 0 || n === 1) {
        return true;
    }

    var fibonacciSequenceArray: number[] = [0, 1];
    var i = 0;
    while (i < 100000) {
        fibonacciSequenceArray.push(fibonacciSequenceArray[i] + fibonacciSequenceArray[i + 1]);
        if (fibonacciSequenceArray[fibonacciSequenceArray.length -1] === n) {
            return true;
        }
        if (fibonacciSequenceArray[fibonacciSequenceArray.length -1] > n) {
            return false;
        }
        i++;
    }

    if (i === 100000) {
        throw new Error("'n' exceeded its maximum size.");
    }

    throw new Error("Something unexpected happened.");
}

// GCF

// LCM

// A005132