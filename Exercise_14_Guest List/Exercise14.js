//****ABDUL WAHEED****//            //****04/10/2022****//

// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

console.log("***Q14***");
const guests = ["Ahmad", "Saif", "Ali", "Umer"];
guests.forEach((guest) => {
  console.log(
    "Assalam-o-Alikum! " +
      guest +
      " I am gladly inviting you to join me on (12/12/22) as I plan to arrange a delicious dinner party......"
  );
});
