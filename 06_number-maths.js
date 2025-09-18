const score = 400;
console.log(score);

const balance = new Number (100);
console.log(balance);

console.log(balance.toString().length);
// String value length check karva mate use thai chhe
// o/p: 3

console.log(balance.toFixed(2)); 
// Decimal point pachhi value show karwa mate toFixed() method use thay chhe 
// o/p: 100.00

const  otherNumber = 124.89;
console.log(otherNumber.toPrecision (3)); 
// decimal pachhi value round up karwa mate use thai chhe
// o/p: 124.9

const hundred = 1000000;
console.log(hundred.toLocaleString()); 
// value toLocaleString us base coma seprate add thai default
// o/p : 1,000,000
console.log(hundred.toLocaleString('en-IN')); 
// value India count related specifiy karse
// o/p : 10,00,000


// +++++++++++++++++++++++  MATHS +++++++++++++++++++++++

console.log(Math); 
// Maths it self object
//o/p : Object [Math] {}
console.log(Math.abs(-4));
// Negative value ne positive karse na k positive value Nagative convert karse
// o/p: 4

console.log(Math.round(2.6));
// Rounded value return karse 
// o/p: 3

console.log(Math.ceil(2.3)); 
// ceil means upper value
// o/p: 3

console.log(Math.floor(2.9));
// floor means down value
// o/p: 2

// most important example
console.log(Math.random()); // o/p: 0 to 1  always output 0 to 1 between  o/p : 0.8445387388973893
console.log(Math.random() * 10); // o/p 4.8123827213 means k value left side increase  o/p hawe 1 to 10 between aawse
console.log((Math.random() * 10) + 1); // o/p: 9.434223423423
console.log(Math.floor(Math.random() * 10) + 1); // floating value down aawse have decimal point nai aawe o/p:  4

const min = 10;
const max = 20;
console.log((Math.random() * (max - min)) + min); // o/p: 10.2456456
console.log(Math.floor(Math.random() * (max - min) + min)); //o/p: 18 