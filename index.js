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



// let count = {};
// function grades (te){
//     te.toUpperCase().split(",").forEach( (x) => count[x] = (count[x]|| 0) +1)
//     console.log(count)
// }

//                              My solution in case we will be given all grates all together    =   1 Task



// let N = 0;
// let ticketsFirstWeek = 0;
// let ticketsSecondWeek = 0;

// function ticketPrice(num){
//     N = num;
//     console.log(`Ticket price is set to ${N}$`)
// }

// function firstWeek (num){
//     console.log(`in first week we gained ${num * N}$`)
//     ticketsFirstWeek = num
// }
// function secondWeek (num){
//     ticketsSecondWeek = num
//     console.log(`in second week we gained ${num * N}$`)
// }

// function compareWeeks(){
//     (ticketsFirstWeek === ticketsSecondWeek) ? console.log("Equal amount of tickets were sold!") : (ticketsFirstWeek > ticketsSecondWeek) ? console.log(`In first week we sold ${ticketsFirstWeek - ticketsSecondWeek} tickets more!`) : console.log(`In second week we sold ${ticketsSecondWeek - ticketsFirstWeek} tickets more!`) 
// }

// function revenue(){
//     console.log(`Our total revenue in 2 weeks is ${N*ticketsFirstWeek + N*ticketsSecondWeek}$`)
// }


// let v = input.split(" ").reduce( (x,y) => x + y,0)  // where input is a string of sold tickets in a week.


//                  My solution to second task.   It can be better but more info needed in the Task!




//                                          Epam solution of second task!

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const ask = (question) =>
//   new Promise((resolve) => rl.question(question, resolve));
 
// async function main() {
//   const ticketsFirstWeekPerDay = await ask(
//     "Enter the number of tickets sold during the first week (for each day): "
//   );
//   const ticketsSecondWeekPerDay = await ask(
//     "Enter the number of tickets sold during the second week (for each day): "
//   );
//   const price = Number(await ask("Enter the ticket price: "));
 
//   const totalTicketsFirstWeek = ticketsFirstWeekPerDay
//     .split(" ")
//     .map(Number)
//     .reduce((s, c) => s + c, 0);
//   const totalTicketsSecondWeek = ticketsSecondWeekPerDay
//     .split(" ")
//     .map(Number)
//     .reduce((s, c) => s + c, 0);
 
//   console.log(
//     `${totalTicketsFirstWeek} tickets were sold during the first week`
//   );
//   console.log(
//     `${totalTicketsSecondWeek} tickets were sold during the second week`
//   );
 
//   if (totalTicketsFirstWeek < totalTicketsSecondWeek) {
//     console.log(
//       `In the second week, the cinema sold ${
//         totalTicketsSecondWeek - totalTicketsFirstWeek
//       } more tickets than in the first one.`
//     );
//   } else if (totalTicketsFirstWeek > totalTicketsSecondWeek) {
//     console.log(
//       `In the first week, the cinema sold ${
//         totalTicketsFirstWeek - totalTicketsSecondWeek
//       } more tickets than in the second one.`
//     );
//   } else {
//     console.log(
//       `The cinema sold the same number of tickets in the first week as in the second week.`
//     );
//   }
 
//   console.log(
//     `The total cinema's revenue for two weeks was $${
//       (totalTicketsFirstWeek + totalTicketsSecondWeek) * price
//     }.`
//   );
//   rl.close();
// }
 
// main();

