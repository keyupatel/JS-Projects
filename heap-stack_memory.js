// Heap and Stack Memory 
// Stack Memory  (Primitive datatype use) // variable diect copy 

let a = 10;
let b = a;
console.log(b);
b = 20;  
console.log(b);  // Value direct change thai  o/p: 20
console.log(a);  // value as it is o/p : 10

let profile = {
    name: "Keyur",
    emai: "keyur@gmail.com"
}
let profile2 = profile;

console.log(profile2);
profile2.name = "Keyur Patel";
console.log(profile2); // Direct object ma pan value change thai jase like name=Keyur Patel 
console.log(profile);  // Direct object ma pan value change thai jase like name=Keyur Patel 


// summery: stack memory ma copy malse je pan value update kariye chhe te only copy ma kariye na k direct
// heap memory ma reference male aapne je pan value change kaariye hhe te direct j reference value ma kariye chhe every place par update thase