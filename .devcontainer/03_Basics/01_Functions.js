function myName(){
    console.log("A");
    console.log("s");
    console.log("i");
    console.log("m");

}
// myName()

// Some complex Function evaluations

// function addTwoNumbers(number1, number2) // when you make function deffination, 
// // and take any input then this is called parameters
// {
// console.log(number1 +number2)
// }
//  addTwoNumbers(3,7) // this step add arguments and call the function

// intresting concept 
function addTwoNumbers(number1 , number2){
    // let result = number1 +number2
    // return result
    return number1 +number2
}
const result = addTwoNumbers(3,7)
// console.log("Result is " , result);

function isLoggedIN(userName = "Asim Ali"){
    // if (userName === undefined){
        if (!userName ){
        console.log("Please enter a username");
        return
    }
    return `${userName} Just Logged In `
}
// console.log(isLoggedIN('asim ali'))
// console.log(isLoggedIN("webdevAsimAli"));

//  rest operator also called as Spread operator but have some use casses
// function calculateCartPrice (...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,600,300))

//  some intresting question 
function calculateCartPrice (val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,600,300))


// Function pass in object
const user = {
    username: "Asim Ali",
    price: 204
}
function handleObject(anyObject){
// console.log(`the username is ${anyObject.username}, and price is ${anyObject.price}`);
}
// handleObject(user)
// You can direct acces of an objectby using funcaton call
handleObject({
    username:"Asim Ali",
    price: 754
})

// Function pass in an array

const NewArray = [459,329,567,234]

function handeleArray(getArray){
    return getArray[2]
}
// console.log(handeleArray(NewArray));

//  you can direct accces to an Array

console.log(handeleArray([200,56,890,234,90,543]))
