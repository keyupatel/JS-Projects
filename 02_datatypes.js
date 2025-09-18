"use strict" ; // Treat all js code as newer version
// console.log(typeof "Keyur");

// Data types conversions

let score = 33;
//console.log(typeof score); 
let age = "33a";
let valueInnumber = Number(age);  // Convert in number
console.log(typeof age);
console.log(typeof valueInnumber); // convert in number o/p
console.log(valueInnumber); // NaN Not a Number o/p
let gender = true;
let genderInNumber = Number (gender);
console.log(genderInNumber); // Value return 1 

// convert into Boolean
let isLoggenIn = "hitesh";
let booleanLoggedIn =  Boolean (isLoggenIn);
console.log (booleanLoggedIn);

// convert into String

let name = 33;
let result = String (name);
console.log(typeof (result));