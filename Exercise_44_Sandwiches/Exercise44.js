//****ABDUL WAHEED****//            //****04/10/2022****//

// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
//Q44
console.log("***Q44***");
const sandwitch_items = [
  "Bread slices",
  "Cheese slices",
  "Mayonnaise sauce",
  "Salt",
  "Black pepper",
  "Mustard",
];
//  (optional)

function sandwitch_summary(...items) {
  items.forEach((item) => {
    console.log(item);
  });
}
sandwitch_summary("Lettuce leaves", ...sandwitch_items);
console.log("______________________");
sandwitch_summary("Lettuce leaves", ...sandwitch_items, "Tomatos");
console.log("______________________");
sandwitch_summary(...sandwitch_items, "Jam", "Lettuce leaves", "Tomatos");
console.log("______________________");

