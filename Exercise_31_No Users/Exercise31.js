//****ABDUL WAHEED****//            //****04/10/2022****//

// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let usersnames = [
  "user1",
  "user2",
  "user3",
  "user4",
  "admin",
  "user5",
  "user6",
];

usersnames = []; //now array becomes empty
//console.log(usersnames.length);//0

usersnames.length == 0 ? console.log("We need to find some users!") : "";
