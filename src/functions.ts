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

// Sequences (Source: OEIS):
    // A005132

// Theorems:

