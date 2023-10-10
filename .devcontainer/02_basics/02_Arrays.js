// using Push method in array
// push return exisiting array with New array
const my_Heros = ["Fahad", "Zeeshan", "Qasim Ali"]
const Sir_Heros = ["Shaktiman" , "SpiderMan", "Superman"]

// my_Heros.push(Sir_Heros)

// console.log(my_Heros);
// console.log(my_Heros[3][1]);

//  Using concat method in Array 
// Concat array return new array by combiing existing Array elements

// const your_Heros = my_Heros.concat(Sir_Heros)
// console.log(your_Heros);

// Spread operator in  Arrays 

const all_new_Heros = [...my_Heros,...Sir_Heros]
console.log(all_new_Heros);

// Flat operator used in arrays which return an array to spread all values without worry
//  where to get these vaues in an arrays 

const another_Array = [1,8,4,2 , [4,3,8,9], 3,[1,3,9]];
const all_another_Arrays = another_Array.flat(Infinity);
// console.log(all_another_Arrays);

// console.log (Array.isArray("Asim Ali"))
// console.log(Array.from("Asim Ali"));
// console.log(Array.from({name: "Asim Ali"})); // Intresting 

let score2 = 450
let score3 = 905
let score4 = 560

// console.log(Array.of(score2,score3,score4));

