//****ABDUL WAHEED****//            //****04/10/2022****//

// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

console.log("***Q6***");
let person_name = "    AbdulWaheed\t\n";
console.log(person_name);
let stripped_name = person_name.replace(/[' ']|[\t\n]/g, "");
//console.log(stripped_name.length);
console.log(stripped_name);
