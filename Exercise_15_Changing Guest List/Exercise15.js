//****ABDUL WAHEED****//            //****04/10/2022****//

// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.

const guests = ["Ahmad", "Saif", "Ali", "Umer"];
guests.forEach((guest) => {
  console.log(
    "Assalam-o-Alikum! " +
      guest +
      " I am gladly inviting you to join me on (12/12/22) as I plan to arrange a delicious dinner party......"
  );
});
console.log("Mr. " + guests[1] + " can't make the dinner");
guests[1] = "Suleman";
guests.forEach((guest) => {
  console.log(
    "Assalam-o-Alikum! " +
      guest +
      " I am gladly inviting you to join me on (12/12/22) as I plan to arrange a delicious dinner party......"
  );
});
