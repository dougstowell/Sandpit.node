function getPrimes(max) {
    var primes = [];
    var sieve = new Array( max );
    for( var i = 0;  i < max;  i++ ) {
        sieve[i] = true;
    }
    for( var p = 2;  p < max;  p++ ) {
        if( sieve[p] ) {
            // p is prime, save it and mark p*2, p*3, etc. as non-prime
            primes.push( p );
            for( var t = p * 2;  t < max;  t += p ) {
                sieve[t] = false;
            }
        }
    }

    return primes;
}

function getPrimesWithCallback(max, callback) {
    callback(getPrimes(max));
}

function getFibonacci(n) {
    return n < 2 ? n : getFibonacci(n - 1) + getFibonacci(n - 2);
}

function getFibonacciWithCallback(n, callback) {
    callback(getFibonacci(n));
}

exports.primes = getPrimes;
exports.primesWithCallback = getPrimesWithCallback;
exports.fibonacci = getFibonacci;
exports.fibonacciWithCallback = getFibonacciWithCallback;
