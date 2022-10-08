// ***Abdul Waheed***//         //***04/10/2022***//

// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let upperCase = personName.toUpperCase();
let lowerCase = personName.toLowerCase();
let titleCase = personName.charAt(0).toUpperCase().concat(personName.slice(1));
console.log("***Text Transformations***");
console.log(upperCase);
console.log(lowerCase);
console.log(titleCase);