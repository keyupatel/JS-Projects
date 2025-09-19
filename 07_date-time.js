let myDate = new Date();
console.log(myDate); //o/p 2025-09-18T14:51:33.17z current date & time show

console.log(myDate.getMonth()); // o/p: 8

console.log(myDate.getFullYear());  // o/p: 2025

// convert date into string 
console.log(myDate.toString()); 
// Full Date in String 
// o/p: Thu Sep 18 2025 20:30:58 GMT +0530 (India Standard Time)
console.log(myDate.toDateString()); 
// Only date
// o/p: Thu Sep 18 2025
console.log(myDate.toISOString()); // o/p: 2025-09-18T15:04:01,583Z

console.log(myDate.toLocaleString()); 
// Date and time
//o/p: 9/18/2025, 0:36:14 PM  // Date and time proper format show 

console.log(myDate.toLocaleDateString()); 
// Local Date  (dd/mm/yyyy in India)
//o/p: 9/18/2025 // Date print thai

let myCreateDate = new Date(2025, 0, 18, 5, 3, 30);
let createDate2 = new Date("1/18/2025");
console.log(myCreateDate.toLocaleString()); // o/p: 1/18/2025, 5:03:30 AM
console.log(createDate2.toLocaleString()); // o/p: 1/18/2025, 5:03:30 AM




