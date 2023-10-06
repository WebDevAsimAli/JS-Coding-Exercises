// Arrays 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr = [1,3,7,8]
const myHeros = ["QasiM Ali", "Asim Ali","Hashim Ali"]

const myArr2 = new Array(1,9,5,3)
// console.log(myArr2[2]);

//  Arrays methods 
myArr.push(5) //Add elements at the end of array
// console.log(myArr);

// Pop funation simply remove the elements at the end og the array 

// myArr.pop()
// console.log(myArr);

// The unshift() method of Array adds the specified elements to the beginning of an array and returns the new length of the array.
myArr.unshift(6)
// console.log(myArr);

//The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

myArr.shift()
// console.log(myArr);

// Some questionairs methods in javascripts that use for only True and false operations

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

//  joins comboined our array and also convert to string 

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof myArr);
// console.log(typeof newArr);

// Slice and splice 
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements 

// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log("A  " , myArr);
const myn1 = myArr.slice(1,3) 
console.log(myn1);
console.log("B  " , myArr);

const myn2 = myArr.splice(1,3)
console.log("c  " , myArr);
console.log(myn2);