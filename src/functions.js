// Algorithms:

export function isPrime(n) {
    if (n == 2 || n == 3)
        return true;
    if (n <= 1 || n % 2 == 0 || n % 3 == 0)
        return false;  
    for (let i = 5; i * i <= n ; i+=6)
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    return true;
  }

export function isComposite(n) {
    if (n <= 1 || n == 2 || n == 3)
        return false;
    if (n % 2 == 0 || n % 3 == 0)
        return true;  
    for (let i = 5; i * i <= n ; i+=6)
        if (n % i == 0 || n % (i + 2) == 0)
            return true;
    return false;
}

export function isOdd(n) {
    return !(n % 2 == 0);  
}

export function isEven(n) {
    return n % 2 == 0;
}

export function parity(n) {
    return (n % 2 == 0) ? "Even" : "Odd";
}

// Highly composite number

// GCF

// LCM

// Sequences (Source: OEIS):
    // A005132

// Theorems:

