var mathModule = require("./math");
var fs = require('fs');

// Sync versions.
var primeList = mathModule.primes(200);
console.log(primeList);

console.log(mathModule.fibonacci(20));

console.log('Done Sync Versions');


// Callback versions.
mathModule.primesWithCallback(200, function(primes) {
    console.log(primes);
});

 mathModule.fibonacciWithCallback(40, function(n) {
     console.log(n);
 });

console.log('Done Callback Versions');

// Read a file
fs.readFile('dummy.txt', function (err, data) {
	if (err) {
		return console.log(err);
	}
  	console.log('I have read the file...');
});

console.log('I am after file read call...');
