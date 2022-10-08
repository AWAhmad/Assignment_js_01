//****ABDUL WAHEED****//            //****04/10/2022****//

// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

//Q32
console.log("***Q32***");
let current_users = [
  "cUser1",
  "cUser2",
  "cUser3",
  "cUser4",
  "cUser5",
  "cUser6",
];

let new_users = ["nUser1", "nUser2", "cUser3", "newUser4", "cuser5", "nUser6"];

//Modifying arrays to lowercase inorder to prevent caseSensitivity

current_users = current_users.map((c_users) => c_users.toLowerCase());
new_users = new_users.map((n_users) => n_users.toLowerCase());
//here cUser5 and nuser5 are different
new_users.forEach((newUser) => {
  current_users.includes(newUser)
    ? console.log(`${newUser} Already exits`)
    : console.log(`${newUser} is available `);
});
