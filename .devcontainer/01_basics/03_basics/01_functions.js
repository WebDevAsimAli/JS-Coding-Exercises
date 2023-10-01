function callMyName(){
    console.log("A");
    console.log("S");
    console.log("I");
    console.log("M");
}
//callMyName()

// function addTwoNumbers(number1,number2){
//     // when you make function deffination then you give any input that calls Parameters
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // console.log("Asim Ali");
    return number1 + number2
}

const result = addTwoNumbers(5,4) // when you call function and give any value then you say argument
//console.log("result is this : " , result);

function loginUserMessage(username){
    // if (username === undefined){
        if (!username){
        console.log("please enter the username");
        return
       
    }
    return " ' " + username + " just Logged In ' "
}
//console.log(loginUserMessage());
//console.log(loginUserMessage("Asim"));
function loginUserMessage(username = "Asim Ali"){
    if(!username){
        console.log("Please Enter the username");
        return
    }
    return " ' " + username + " Just logged In ' "

}
// console.log(loginUserMessage("Saim Ayub"));
// Question: javascript function that finds the mean of 5 numbers:
function functionMean(num1,num2,num3,num4,num5){
    let sum = num1 + num2 + num3 + num4 + num5
    let mean = sum / 5
    return mean 
}
let output = functionMean (1,2,4,5,9)
console.log(output);