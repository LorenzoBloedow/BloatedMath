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
        throw new Error("Cannot determine the parity of a floating-point number.");
    return !(n % 2 == 0);  
}

export function isEven(n: number): boolean {
    if (n != Math.trunc(n))
        throw new Error("Cannot determine the parity of a floating-point number.");
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

    let divisorArray: number[] = [];
    for (let i: number = 1; i <= n; i++) {
        if (n % i == 0) {
            isNegative ? divisorArray.push(-Math.abs(i)) : divisorArray.push(i);
        }
    }
    return divisorArray;
}

export function firstHundredMultiples(n: number) {
    // Return array of the first 100 multiples of a number.  
}

// GCF

// LCM

// Fibonacci numbers

// A005132
