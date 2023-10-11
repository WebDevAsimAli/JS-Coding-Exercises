// const tinderUser = new Object() // this is sigleton object
const tinderUsder = {} // this is non sigleton object

tinderUsder.id = "123acd"
tinderUsder.name = "Asim Ali"
tinderUsder.isLoggedIN = true
// console.log(tinderUsder);

const studentName = {
    email: "Asim@google.com",
    userName:{
        fullName:{
               firstName: "Asim",
               lastName: 'Ali'
        }
    }
}
// console.log(studentName.userName.fullName.firstName);

// Combine objects 

const  obj1 = {1:"q", 2:"c"}
const obj2 = {3: "a" , 4: "r"}

// const newObj3 = {obj1,obj2}
// console.log(newObj3);

// const obj3 = Object.assign({},obj1,obj2) // less used 
const obj3 = {...obj1, ...obj2} // mostly used this spread operator 
// console.log(obj3);

// Mostly used syntax when the values come from the database , the array of object

const user = [
    {
        id: 234,
        email: "asimali@google.com"
    },
    {
        id: 224,
        email: "asim@google.com"
    },
    {
        id: 294,
        email: "ali@google.com"
    },

]
// console.log(user[0].email);

//  some intresting thing you need mostly these methods 
// console.log(tinderUsder);

console.log(Object.keys(tinderUsder));
console.log(Object.values(tinderUsder));
console.log(Object.entries(tinderUsder));

// when you loop in object and came a value , then you can ask for existence of value

console.log(tinderUsder.hasOwnProperty('isLoggedIN'));



