// Algorithms:

export function isPrime(n: bigint): boolean {
    if (n == 2n || n == 3n)
        return true;
    if (n <= 1n || n % 2n == 0n || n % 3n == 0n)
        return false;  
    for (let i = 5n; i * i <= n ; i+=6n)
        if (n % i == 0n || n % (i + 2n) == 0n)
            return false;
    return true;
  }

export function isComposite(n: bigint): boolean {
    if (n <= 1n || n == 2n || n == 3n)
        return false;
    if (n % 2n == 0n || n % 3n == 0n)
        return true;  
    for (let i = 5n; i * i <= n ; i+=6n)
        if (n % i == 0n || n % (i + 2n) == 0n)
            return true;
    return false;
}

export function isOdd(n: bigint): boolean {
    return !(n % 2n == 0n);  
}

export function isEven(n: bigint): boolean {
    return (n % 2n == 0n);
}

export function parity(n: bigint): string {
    return (n % 2n == 0n) ? "Even" : "Odd";
}

// Return the number of divisors a number has.
// Note: This function does not consider divisors of the opposite parity of the input.
export function divisorCount(n: bigint): bigint {

    // If the input is negative, convert it to a positive number.
    if (n < 0n) {
        n = BigInt(Math.abs(Number(n)));
        console.log(n);
    }
    console.log(n);

    let divisorCount = 0n;
    for (let i: bigint = 1n; i <= n; i++) {
        if (n % i == 0n) { divisorCount++; }
    }
    return divisorCount;
}

// Return the number of multiples a number has.
export function multipleCount(n: bigint) {

}

export function isHighlyComposite(n: bigint): boolean {

    // A highly composite number must be a positive integer.
    if (n < 0) {
        return false;
    }

    // Get the number of divisors of n.
    const primaryDivisorCount: bigint = divisorCount(n)

    // Compare the number of divisors of every positive integer smaller than 'n'
    // against the number of divisors of 'n' to determine if 'n' is a highly composite number.
    for (let i: bigint = 1n; i < n; i++) {
        let secondaryDivisorCount: bigint = divisorCount(i);
            if (secondaryDivisorCount > primaryDivisorCount) {
                return false;
            }
    }
    return true;
}

export function divisors(n: bigint) {
    // Return array of divisors of a number.
}

export function multiples(n: bigint) {
    // Return array of multiples of a number.  
}

// GCF

// LCM

// Fibonacci numbers

// A005132
