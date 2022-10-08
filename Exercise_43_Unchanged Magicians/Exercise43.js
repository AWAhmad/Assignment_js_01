//****ABDUL WAHEED****//            //****04/10/2022****//

// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
//Q43
console.log("***Q43***");
//Original Array
const megician_namess = ["conjurer", "illusionist", "trickster"];
let great_magicians = [...megician_namess];
function Make_great() {
  great_magicians = great_magicians.map((meg) => "The Great " + meg);
  return great_magicians;
}
//Display Original Array
function Display() {
  megician_namess.forEach((meg) => {
    console.log(meg);
  });
}
//Display Modified Array
function Display1() {
  Make_great().forEach((meg) => {
    console.log(meg);
  });
}
Display(megician_namess);
Display1(great_magicians);
