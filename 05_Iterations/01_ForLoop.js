// For Loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         // console.log(" 5 is the best number ");
//         continue;
//     }
//     // console.log(element); 
// }

// Loo inside the loop
// for (let i = 1; i <=10; i++) {
//     console.log(`Outer Loop value : ${i}`);
//     for (let j = 1; j <=10; j++) {
//         console.log(i + '*' + j + '=' + i*j);
        
//     }
// }
// let myArray = ["SuperMan", "ShaktiMan" , "BatMan"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }
// Break and continue
for (let index = 1; index <=20; index++) {
    if (index == 7) {
        console.log("7 is my favourite number");
        continue;
    }
    // console.log(index);

}

for (let j = 1; j <=10; j++) {
    if (j==5) {
        console.log("5 is Detected");
        break
    }
    
}