//****ABDUL WAHEED****//            //****04/10/2022****//

// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
console.log("***Q29***");
const fruits = [
  "Apple",
  "Banana",
  "Guave",
  "Grapes",
  "Pine apple",
  "Mango",
  "WaterMelon",
];
fruits.forEach((fruit) => {
  if (fruit.match("Apple")) {
    fruits.forEach((f) => console.log(f)); //f ==> fruit
  }
});
//favorite three fruits

const favorite_fruits = ["Apple", "Mango", "WaterMelon"];

//find certain kind of fruit

fruits.forEach((fruit) => {
  fruit == "Apple" ? console.log("You really like " + fruit + "!") : "";
  fruit == "WaterMelon" ? console.log("You really like " + fruit + "!") : "";
  fruit == "Mango" ? console.log("You really like " + fruit + "!") : "";
  fruit == "Banana" ? console.log("You really like " + fruit + "!") : "";
  fruit == "Guave" ? console.log("You really like " + fruit + "!") : "";
});
fruits.includes(/apple/i) ? console.log("FOUND") : "";
