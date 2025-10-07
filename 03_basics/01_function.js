// function greet(){
//     console.log("Hello Anjana!")
// }

function greet(name){
    console.log("Hello " + name + "!" )
}
greet("Anjana");

function addTwonumber (a,b){
    return a+b;
}
const result = (addTwonumber(3,5));
console.log(result);

// How to use array in function

const newArray = [10,20,30,40,50];

function returnSecondValue (getAnyArray){
    return getAnyArray[1];
}
console.log(returnSecondValue(newArray)); // o:p : 20
console.log(returnSecondValue([200,400,500])); // o/p: 400 // direct value added

// how to use object in function

const user = {
    name: "Anju",
    age: 32
}
function userDetail (anyObject){
    console.log("Name:", anyObject.name);
    console.log("Age:", anyObject.age);
    console.log(this);
}
console.log(userDetail(user));
