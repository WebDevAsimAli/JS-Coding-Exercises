// sigleton
// object.create  // using constructor method  
// when we declare using literals then not making sigleton 
// but sigleton can make using 2)constrauctor 

// 1)object literals 
const mySym = Symbol("Hi Asim") 
const JSUser = {
    name:"Asim Ali warraich",
    age: 23,
    [mySym]: "Hi Asim",
    "fullName": "Asim Ali",
    email: "asimwarraich@google.com",
    location: "Gujrat",
    isLoggedIN: true,
    lastLoggesIN:["Tuesday", "Wednesday"]
}

// console.log(JSUser.email)
// console.log(JSUser["email"])
// console.log(JSUser["fullName"]);
// console.log(JSUser[mySym]);

JSUser.email = "asimali@microsoft.com"
console.log(JSUser);
// Object.freeze(JSUser)
JSUser.email = "asimali@chatgpt.com"
// console.log(JSUser);

// in Javascript finctions theree is no discrimination treat as a variable 

JSUser.greeting = function(){
    console.log("Hello World");
}
JSUser.greetingTwo = function(){
    console.log(`Hello World, ${this.name}`);
}
console.log(JSUser.greeting())
console.log(JSUser.greetingTwo());
