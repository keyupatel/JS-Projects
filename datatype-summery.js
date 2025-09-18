// Premitive Datatype 
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
let a = null;
let b;
let bigNumber = 12345678901234567890123n;

console.log(typeof "Keyur"); // String
console.log(typeof 123); // Number
console.log(typeof true); // Boolean
console.log(a); // Null
console.log(b); // Undefined
console.log(typeof bigNumber); // Big Interger number
// Symbol 
const id = Symbol("123");
const anotherid = Symbol ("123");

console.log(id === anotherid);

/// Reference (Non Premitive Datatype)
// Type => Array, Objects, Functions

const heros = ["Salman", "Sharukh", "Imran"];  // Array square brackets ma array aawse
let profile = { // objects currelry braces na under je pan aawe te objects kehwase
    user_name: "Keyur",
    user_id: 143,
}

const Myfunction = function (){
    console.log("Hello World");
}
console.log(typeof Myfunction); // Function datatype Function aawse