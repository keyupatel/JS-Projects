// String is primitve data type.
// String uses '', "", `` (template literals)
// string value can't change we can use new string for the same

let str1 = "Helllo";
let str2 = 'world';
let str3 = `Hello World`;
console.table([str1,str2,str3]);

// Charactristics 
// 01 Immutable 
let str4 = "Keyur";
str4[0] = "M"; // no changes to K to M
console.log(str4); // o/p: Keyur
// 02 Index base start from 0
let city = "Surat";
console.log(city[2]); // o/p: r
console.log(city[4]); // o/p: t
// 03 lentgh property count start 1 
console.log(str4.length); // o/p: 4

// String common methods
// 01 case conversion like uppercase , lovercase


let uname = "Keyur Patel"; 
console.log(uname.toUpperCase());  // Uppercase o/p : HELLO WORLD
 console.log(uname.toLowerCase()); //Lowercase o/p : hello word

 // String interpolations

const fname = "Keyur";
const lname = "Patel";
console.log(`${fname} ${lname}`);

// charAt number position of character 0 start postion
const fullname = "Keyur";
console.log(fullname.charAt(3)); // 3rd position par kyo character aawse o/p: u
console.log(fullname.indexOf("K")); // K character kai position par che check karwa indexOf method use thase but character casesensistive hovo joiye

// Substrings methods
const personname = "Keyur";
console.log(personname.slice(0,4)); // o/p Keyu  
// slice means start point 0 to 3 number string count thase
// index 0-> K , 1-> e, 2-> y, 3->u
console.log(personname.slice(-4)); // o/p  rue 
// slice negative means end point 2 number string count thase end sudhi
// index 0-> r , 1-> u, 2-> e

const persolnname = "KeyurPatel";
console.log(persolnname.substring(2,4)); // substring means start to end point between part (2,4  means 2,3) 

// String searching
console.log(persolnname.indexOf("Pa")); // o/p 5
// Indexof Start K(0), e(1), y(2), u(3), r(4), p(5), a(6), t(7), e(8), l(9)
console.log(persolnname.lastIndexOf("e")); // last ma kai position par e male chhe te start count  o/p 8
console.log(persolnname.includes("Patel")); // check it Patel is available or not in the string o/p true

// trim method trim()
console.log(persolnname.replace("Keyur", "Keyurkumar " )); // Replace kare search sting exisitng to new string
let msg = " Hello Word ";
console.log(msg);
console.log(msg.trim()); // Remove extra space from start to end but not remove middle space between two string words

//
