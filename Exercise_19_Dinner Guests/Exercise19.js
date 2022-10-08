//****ABDUL WAHEED****//            //****04/10/2022****//

// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.

const guests = ["Ahmad", "Saif", "Ali", "Umer"];
guests[1] = "Suleman";
let mid = guests.length / 2;
guests.push("Abdullah");
guests.splice(mid, 0, "AsadUllah");
console.log(guests.length + " people are invited for dinner");
