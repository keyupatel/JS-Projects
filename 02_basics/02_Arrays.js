// Spread Operators (...) (three dots) means spread operator
// use Array merge, Array Copy , Elements pass

//1. Array Copy
const fruit = ["Apple", "Banana", "Mango"];
const newFruit = [...fruit];
console.log(fruit); // o/p: ["Apple", "Banana", "Mango"]
console.log(newFruit); // o/p: ["Apple", "Banana", "Mango"] // Copy thai
console.log(fruit === newFruit); // false banne same nathi reference

// 2. Array Merge
const num = [1,2,3];
const num2 = [4,5];
const numMerge = [...num, ...num2];
console.log(numMerge); // o/p: [1,2,3,4,5]

// 3. Add Element between
console.log(0,...num, "hi", ...num2); 

// 4. String -> Array
const uname="Keyur";
const chars = [uname];
const chars2 = [...uname];
console.log(chars);
console.log(chars2);

// 5. Nested array and multi Nested Array combine in sinle array using flat()
const arr1 = [1,2,[3,4],[5,[6,7]]];
const arrResult = arr1.flat(Infinity); // Infinity means depth number ketla chhe Infinite
console.log(arrResult);


// 6. Array isArray(). from(), .of()
console.log(Array.from("Keyur")); // o/p: string ne Character array ma convert ["K","e","y", "u", "r"]
console.log(Array.isArray("Hello")); // check karse Array chhe k nahi answer true/false  o/p False if use ["Hello"] then true

// 7. Array.of() variables direct convert thase array ma
const score1 = 100;
const score2 = 300;
const score3 = 400;
console.log(Array.of(score1,score2,score3));