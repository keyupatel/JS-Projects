// IIFE (Immediately Invoked function Expression)
// ( () {} ) () syntax

(function(){
    console.log("Hello IIFE");
})();

// Arrow function with IIFE

(() => {
    console.log("Hi IIFE with Arrow function")
})();

// with parameter IIFE
( (name) => {
    console.log(`Hello ${name} `)
}) ("Keyur")