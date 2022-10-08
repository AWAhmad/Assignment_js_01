//****ABDUL WAHEED****//            //****04/10/2022****//

// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

//Tests for equality and inequality with strings

let str1 = "Islamabad";
let str2 = "Islamabad";

console.log(str1 == str2); //true
console.log(str1 === str2 + " "); //false

//Tests using the lower case function
console.log("---Tests using the lower case function---");
let str3 = "islamabad";
console.log(str1.toLowerCase() == str3); //true
console.log(str1 == str2.toLowerCase()); //false

console.log("---Numerical tests involving equality and inequality---");
console.log(2 == 2); //true
console.log(2 != 2); //false

console.log("---Numerical tests involving > and < ---");
console.log(2 > 2); //false
console.log(2 < 2); //false
console.log(2 < 3); //true

console.log("---Numerical tests involving >= and <= ---");
console.log(2 <= 2); //true
console.log(2 >= 3); //false

console.log("---Tests using 'and' and 'or' operators---");
//AND Operator
console.log(2 <= 2 && 1 < 9); //true
console.log(2 <= 2 && 1 > 9); //false
//OR Operator
console.log(2 <= 2 || 1 < 9); //true
console.log(2 < 2 || 1 > 9); //false
console.log("---Test whether an item is in a array---");
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(2)); //true
console.log(numbers.includes(8)); //false
console.log("---Test whether an item is not in a array ---");
console.log(!numbers.includes(2)); //false
console.log(!numbers.includes(8)); //true
