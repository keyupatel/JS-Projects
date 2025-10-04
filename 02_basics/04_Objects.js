// const tindername = new Object()  // singletone object
// const tinername = {}  // Not a singletone object 

const regularUser = {
    email: "keyu@gmail.com",
    fullname: {
        userFullname:{
            firstName: "Keyur",
            lastName: "Patel"
        }
    }
}

console.log(regularUser.email); // o/p: keyu@gmail.com
console.log(regularUser.fullname.userFullname);  // o/p: { firstName: 'Keyur', lastName: 'Patel' }
console.log(regularUser.fullname.userFullname.firstName); // o/p: Keyur

console.log(Object.keys(regularUser));

// Object Destructuring

const person = {
    name: "Keyur",
    age: 35,
    city: "Surat"
}
// Object Destructure {Property name} ni under
const {name, age} = person;
console.log(name,age); // Keyur 35
const {name: fullname, age: Userage} = person; // If you want to use different name like fullname use it
console.log(fullname, Userage); // Keyur
const {country = "India"} = person; // If you want to add default value as object
console.log(country);
console.log(person.name);