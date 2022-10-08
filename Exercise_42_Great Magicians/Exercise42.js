//****ABDUL WAHEED****//            //****04/10/2022****//

// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

//Q42
console.log("***Q42***");

function make_great() {
  megicians = megicians.map((meg) => "The Great " + meg);
  return megicians;
}

function show_megicians() {
  make_great().forEach((meg) => {
    console.log(meg);
  });
}
show_megicians(megicians);
