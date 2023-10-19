// Control Flow(Whole code run on Conditional basis)
// if(2!=8){
//     //console.log("Executed");
// }
// if(2 ==="2"){
//     console.log("Run the code");
// }

// const toadyTemprature = 18

// if(toadyTemprature ===56){
//     console.log("yes Temperature is equal");
// }
// else {
//     console.log("Temprature is not equal");
// }
// console.log("EXECUTED");

// < , >, <=,>= !=,===


// const score = 91

// if(score > 90 ){
// const result  = "A+ grade"
// console.log(`You Sucessfully Achieved , ${result}`);
// }

// Implicit scope code 
// const testMarks = 95

// if(testMarks>50) console.log("Pass the exam") , console.log("Congrats");

// Nested - If 

// if(testMarks<50){
//     console.log("Marks are less than 50");
// } else if(testMarks<60) {
//     console.log("Marks are less than 60");
// } else if (testMarks < 70){
//     console.log("Marks are less than 70");
// } else if (testMarks<80){
//     console.log("Marks are less than 80");
// }
// else {
//     console.log("Marks are greater than 90");
// }

const userLoggedIN = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromFacebook= true
// And (&&), and OR(||) are logical operators 
// the And (&&)operators means all condition whould be true 
// The OR(||) operators means if one condition true then the ork is done
if(userLoggedIN && debitCard && 2==4 ){
    console.log("Allow for shoping");
}

if (loggedInFromGoogle || loggedInFromFacebook){
    console.log("User logged In");
}



