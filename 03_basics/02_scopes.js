// Scopes {}
//1. Global Scope
let name = "Anjana";
function greet(){
    console.log("Name:" + name);
}
greet();
console.log(name);

//2. function scope 

function testfunction(){
    let msg = "Hello";
    console.log(msg);
}
testfunction();

//3. Block scope
{
    let x = 10;
    const y = 20;
    var z = 30;
}
// console.log(z); // o/p: 30 because var can't as a block
// console.log(x,y); // o/p: Error x and y is not defined Let, Const both are only block level

// 4. Nested Scope

let a = 10;
function outer() {
    let b = 20;
    function inner(){
        let c = 30;
        console.log(a,b,c);
    }
    inner();
}
outer();  // o/p: 10 20 30
// Notes: Inner function can access outer function variable but Outer function can't access inner variables

// 5. Lexical Scope it is depend on where is put the function 
function newOuter(){
    let username = "Keyur";
    function inner(){
        console.log(username);
    }
    inner();
}
newOuter();




