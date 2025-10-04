// Singltone - jyare constructor through object create thai tyare singtone kehwai
// literals - throught object create thai to singletone nai kewai

// syntax 
// const profile = {}; empty object
// how create object
// how to use symbol in object 
const mySymbol = Symbol("key1");

const userPrfile = {
    name: "Keyur",    
    age: 30,
    email: "keyu@gmail.com",
    location: "surat",
    isLoggenIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// how to access object 
// trip 1
console.log(userPrfile.name);
// trip 2
console.log(userPrfile["name"]); // reason for [] we can check datatype 
console.log(userPrfile["age"]);

userPrfile.name = "Keyur Patel";
console.log(userPrfile["name"]); // change value

// Object.freeze(userPrfile); // freeze use karwathi ae object lock thai jaai any par koi value update na thai
// userPrfile.age = 14;
//console.log(userPrfile["age"]);  // o/p: 30
// console.log(userPrfile);

// how to use function with object

userPrfile.greeting =  function(){
    console.log("Hello");
}
console.log(userPrfile.greeting); // o/p: function anonymous 
console.log(userPrfile.greeting()); // o/p: Hello

userPrfile.greetingTwo = function(){
    console.log(`Hello ${this.name}`);  // use bacltik and element name with this keyword
}


