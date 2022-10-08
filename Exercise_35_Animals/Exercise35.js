//****ABDUL WAHEED****//            //****04/10/2022****//

// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
//Q35

const animals = ["elephent", "horse", "cow"];
console.log("---Animals---");
animals.forEach((animal) => console.log(animal));
animals.forEach((animal) =>
  animal == "elephent"
    ? console.log("Its a pet animal")
    : animal == "horse"
    ? console.log("you can't play polo without horse")
    : animal == "cow"
    ? console.log("cow gives milk")
    : ""
);
console.log("***Common Charecterictics***");
console.log("Four legs", "Eat grase");
console.log("Horse would be a great pet!");
