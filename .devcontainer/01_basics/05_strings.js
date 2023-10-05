let myName = "Ali"
let repoCount = 60
// console.log(myName + reopcount + " value");

// Use backticks when working with string interpolation. Backticks allow you to create placeholders for variables within the string.

// console.log(`My name is ${myName} and my Repocount is ${repoCount}` );

const gameName = new String('Asim-Tlp')
// console.log(gameName[0]);
//  prototype can also acces

// Some methods use in strings
// console.log(gameName.__proto__)
// console.log(gameName.length);
// console.log(gameName.toUpperCase());//heap(non primitive datatype and use the original reference value which is not change)
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('m'));

//convert String into subString 

// const newString = gameName.substring(0,4)
// console.log(newString);

const anotherValue = gameName.slice(-7,4)
// console.log(anotherValue);

// Trim(starting and end space in string remove ) and repalce methods

const newStringMethod = "   Asim-warraich-blog   "
// console.log(newStringMethod);

// console.log(newStringMethod.trim())

const url = "https://getinfotime%20Asim_Ali.com"
console.log(url.replace('%20','-'));

//include string method for asking something 

console.log(url.includes('Asim'));
console.log(url.includes('Qasim Ali'));

// split method use to  puts these substrings into an array or ordered list 

console.log(gameName.split('-'));




