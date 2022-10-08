//****ABDUL WAHEED****//            //****04/10/2022****//

// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
//Q41
console.log("***Q41***");
let megicians = ["conjurer", "illusionist", "trickster"];
function display(megician_names) {
  megician_names.forEach((meg) => {
    console.log(meg);
  });
}
display(megicians);
