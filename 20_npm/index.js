var sieve = require('sieve');
var _ = require('lodash');
 
// primes from 2 to 10000 
var primes = sieve(200, 100);

// multiply them by 3. Why? I do not know.
var offset = _.map(primes, function(n) { return n * 3; });

console.log(offset);
