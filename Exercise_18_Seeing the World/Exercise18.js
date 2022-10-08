//****ABDUL WAHEED****//            //****04/10/2022****//

// 18. Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

const places = [
  "Hunza Valley",
  "Attabad Lake",
  "Swat Valley",
  "Naran Kaghan",
  "The pyramids of Giza",
];
//Prirnting array in the original array
console.log("***Original Array***");
places.forEach((place) => console.log(place));

console.log("***Orderd Array(Copied)***");
places_copied = [...places];
places_copied.sort().forEach((place) => console.log(place));
console.log("***Original Array***");
places.forEach((place) => console.log(place));

console.log("***Revesed Array(copied)");
places_copied1 = [...places];
places_copied1.reverse().forEach((place) => console.log(place));
console.log("***Original Array***");
places.forEach((place) => console.log(place));

console.log("***Revesed Array***");
places.reverse().forEach((place) => console.log(place));
//Again reversing the array, becomes the original one
console.log("***Revesed Array(Again)***");
places.reverse().forEach((place) => console.log(place));

//Sorting the original array
places.sort().forEach((place) => console.log(place));
//reversing the sorted array
places.reverse().forEach((place) => console.log(place));
