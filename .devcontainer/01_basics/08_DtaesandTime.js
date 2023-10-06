let toadyDate = new Date()
//console.log(toadyDate);

//  the above formet is not readable now come the conversion part

// console.log(toadyDate.toString());
// console.log(toadyDate.toDateString());
// console.log(toadyDate.toISOString());
// console.log(toadyDate.toLocaleString());

// +++ type of Date is Object in javaScript
// console.log(typeof toadyDate);

//  If we want to print specific date 

// let myCreatedDate = new Date(2023,9,6)
// let myCreatedDate = new Date (2023,9,6,7,3)
// let myCreatedDate = new Date ("2023-10-06") 
let myCreatedDate = new Date ("06-10-2023") 
// console.log(myCreatedDate.toLocaleString());


let rightTime = new Date();
let choice = {timeZone: 'Asia/Karachi'}
let gujratTime = rightTime.toLocaleString('en-US',choice)
// console.log(`The current Time in Gujrat, Pakistan is :${gujratTime}`);

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(rightTime.getTime());

console.log(Math.floor(Date.now()/1000));
