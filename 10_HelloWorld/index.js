var mathModule = require("./math");

// Blocking versions.
var primeList = mathModule.primes(200);
console.log(primeList);

console.log(mathModule.largestNumber(39, -19));

console.log('Done Blocking');


// Non blocking versions.
mathModule.primesWithCallback(200, function(primes) {
    console.log(primes);
});

 mathModule.largestNumberWithCallback(39, -19, function(largest) {
     console.log(largest);
 });

console.log('Done Non Blocking');
