// Array
const myArr = [1,2,3,4,5];
console.log(myArr[2]);  // o/p: 4

const heros = ["Salman", "Amir", "Sharukh", "Ajay"];
console.log(heros[3]); // o/p: Ajay

const myArr1 = new Array(1,2,3,4);
console.log(myArr1 [2]); // o/p: 3

// Array methods example 
const newArray = [0,1,2,3,4,5];
// push() --- value add karse last ma
newArray.push("Keyur"); 
console.log(newArray); // o/p [0,1,2,3,4,5,Keyur]

// pop() -- Value remove karse last ma
newArray.pop();
console.log(newArray); //o/p: [0,1,2,3,4,5]

// unshift() -- value add thase first number means 0 index par
newArray.unshift("Keyur");
console.log(newArray); // o/p: ['Keyur', 0,1,2,3,4,5]

// shift() -- Value remove thase first number means 0 index par
// argument value pass nai karwani
newArray.shift(); // () value pass nai thase
console.log(newArray); // o/p:[1,2,3,4,5]

// includes() -- search karse elements returns True/False

console.log(myArr.includes(2));  // o/p: true

// indexOf() -- ae index par kai value chhe te find karse 

console.log(myArr.indexOf(4));

// join() -- Array join
const myArr2 = myArr.join();
//console.log(myArr);  //  o/p: [1,2,3,4,5]
//console.log(myArr2); // o/p: 1,2,3,4,5
//console.log(typeof(myArr2)); // o/p: String

// slice & spice ();
// slice(start, end) end point value cover nai karse
const fruit = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
//console.log("Fruit:", fruit); 
//const fruitslice = fruit.slice(1,4); // 1 thi start thase 3 item print thase index 0 -> Apple  1->Banana 2->Orange 3->Mango 4->Grapes
//console.log("Fruit Slice:", fruitslice); // o/p:  1->Banana 2->Orange 3->Mango

const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
const fruitsplice = fruits.splice(1,4); // aa jevu work kare aetle fruits array value instant update thai jase

console.log("FruitSplice:", fruitsplice);
console.log("Fruits:", fruits);