// let aS = [];
// let bS = [];
// let cS = [];
// let dS = [];
// let fS = [];

// function grades (letter){
  
//     if (letter.toLowerCase() == "a"){
//         aS.push(1)
//         console.log(`There are ${aS.length} A in the class`)
//     } else if (letter.toLowerCase() == "b"){
//         bS.push(1)
//         console.log(`There are ${bS.length} B in the class`)
//     } else if (letter.toLowerCase() == "c"){
//         cS.push(1)
//         console.log(`There are ${cS.length} C in the class`)
//     } else if (letter.toLowerCase() == "d"){
//         dS.push(1)
//         console.log(`There are ${dS.length} D in the class`)
//     } else if (letter.toLowerCase() == "f"){
//         fS.push(1)
//         console.log(`There are ${fS.length} F in the class`)
//     }
// }

// let aS = 0;
// let bS = 0;
// let cS = 0;
// let dS = 0;
// let fS = 0;

// function grades (letter){
  
//     if (letter.toLowerCase() == "a"){
//         aS += 1
//         console.log(`There are ${aS} A in the class`)
//     } else if (letter.toLowerCase() == "b"){
//         bS += 1
//         console.log(`There are ${bS} B in the class`)
//     } else if (letter.toLowerCase() == "c"){
//         cS += 1
//         console.log(`There are ${cS} C in the class`)
//     } else if (letter.toLowerCase() == "d"){
//         dS += 1
//         console.log(`There are ${dS} D in the class`)
//     } else if (letter.toLowerCase() == "f"){
//         fS += 1
//         console.log(`There are ${fS} F in the class`)
//     }
// }


///                                                                 Their solution !!!


// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const ask = (question) =>
//   new Promise((resolve) => rl.question(question, resolve));
 
// async function main() {
//   const grades = await ask("Enter the grades for the test: ");
 
//   const results = grades.split(" ").reduce((result, grade) => {
//     result[grade] = result[grade] ? result[grade] + 1 : 1;
//     return result;
//   }, {});
 
//   for (const grade of Object.keys(results)) {
//     console.log(`Number of ratings ${grade} = ${results[grade]}`);
//   }
 
//   rl.close();
// }
 
// main();



