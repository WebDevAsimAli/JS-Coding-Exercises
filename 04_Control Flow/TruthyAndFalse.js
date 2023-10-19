const userEmail = []
if(userEmail){
    // console.log("Got the user Email");
} else {
    // console.log("Don't have the User Email");
}
// Flase Values
//  false , 0 , -0 , BigInr 0n, Null , undefined , NaN , ""

// TRUTHY VALUES
// "0" ,  'False' , " " , [] , {} , function(){}

if (userEmail.length===0) {
    // console.log("Array is empty");
}

//  now chec obect is empty or not 
const myObject = {}
if (Object.keys(myObject).length===0) {
    // console.log("Object is emty right now");
    
}
// Nullish coalescing operator (??) Null and undefined 

let val2;
// val2 = 10 ?? 2
// val2 = null ?? 20
// val2 = undefined ?? 45
val2 = null ?? 20 ?? 60
console.log(val2);

// ternary operator in js
// condition ? true : false
const IsTeaprice = 90
IsTeaprice <=80 ? console.log(" Tea price is less than 80 ") :
console.log("Tea price is above 80");
