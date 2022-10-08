//****ABDUL WAHEED****//            //****04/10/2022****//

// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = "civic";
console.log("Is car =='civic'? I predict True");
console.log(car == "civic"); //true

console.log("Is car =='Civic'? I predict false");
console.log(car === "Civic"); //false

console.log("Is car === 'civic'? I predict True");
console.log(car === "civic"); //true

console.log("Is car === car.split(", ")? I predict false");
console.log(car === car.split(" , ")); //false

console.log("Is car == car.split(", ")? I predict true");
console.log(car == car.split(" , ")); //true
