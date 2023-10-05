//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Stack(primitive data Types ) And Heap (Non Primitive Data Types)
// Stack copy the value and Heap use the originol reference of the memory

// Stack Memory example
let myInstagram = "AsimAli34" 
let anotherAccount = myInstagram
anotherAccount = "Asi.m34"
console.log(myInstagram);
console.log(anotherAccount);

//Heap memory example
let userOne = {
    email: "asim@google.com",
    upi: "user@hyuh"
}
let userTwo = userOne
userTwo.email = "asimofficial@google.com"
// console.log(userOne.email);
// console.log(userTwo.email);



