//****ABDUL WAHEED****//            //****04/10/2022****//

// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
const guests = ["Ahmad", "Saif", "Ali", "Umer"];
let mid = guests.length / 2;
guests.push("Abdullah");
guests.splice(mid, 0, "AsadUllah");
//guests.append("Saifullah");
guests.forEach((guest) => {
  console.log(
    "Assalam-o-Alikum! " +
      guest +
      " I am gladly inviting you to join me on (12/12/22) as I plan to arrange a delicious dinner party......I found a bigger dinning table"
  );
});