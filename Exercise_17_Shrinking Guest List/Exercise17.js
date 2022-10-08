//****ABDUL WAHEED****//            //****04/10/2022****//

// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.

const guests = ["Ahmad", "Saif", "Ali", "Umer"];
let mid = guests.length / 2;
guests.push("Abdullah");
guests.splice(mid, 0, "AsadUllah");
guests.forEach((guest) => {
  console.log(
    "Hi! " +
      guest +
      ", As You are invited to dinner,The bigger dinner table wouldnot arrive in time for dinner and there is space for only two person on previous(small) dinner table"
  );
});
//removing guests from list
// console.log("Guest List Length: " + guests.length); //6
for (let guest of guests) {
  if (guests.indexOf(guest) < 2) {
    console.log("Mr. " + guest + " your are still invited for the dinner");
  } else if (guests.indexOf(guest) >= 2) {
    // console.log(guests.indexOf(guest));
    console.log(
      "Mr. " + guest + " l am so sorry, your are not invited for dinner"
    );
    guests.pop();
  }
}
guests.pop();
guests.pop();

guests.forEach((guest) => {
  console.log(guest); //empty array
});
