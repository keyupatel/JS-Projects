const user = {
    username : "Keyur",
    age : 35,
    greet: function (){
        console.log(`${this.username} , Welcome Message`);
        console.log(this);
    }
}
console.log(this); // o/p: {} Empty object when you are run project in node and when you are run the project browser o/p: will be come window object
console.log(user);

// Arrow Function 
// syntax () => {}
let test = () =>{
    let usernmame = "Keyur";
    console.log(this.username);
}
//test();

const addTwonumber = (numb1, numb2) =>{
    return  numb1 + numb2;    
}
console.log(addTwonumber(3,5));

// Implicit return single line code not using return keyword and remove currly braces
let resultNumber = (numb1,numb2) => numb1 + numb2;
// If you are using currley braces {} then write return keyword if you are using () no need to use return keyword
console.log(resultNumber(5,5));
resultNumber = (numb1, numb2) => (numb1 + numb2);
console.log(resultNumber(10,10));

