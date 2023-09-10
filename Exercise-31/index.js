"use strict";
/*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
// Non Empty array case
let userName = ['Admin', 'Aviator', 'Doctor', 'Engineer', 'Farmer'];
// function case
function greetUser(userName) {
    if (userName.length === 0) {
        console.log('We need to find some users!');
        return;
    }
    for (const userNames of userName) {
        if (userNames.toLowerCase() === 'admin') {
            console.log('Hello Admin, would you like to see a status report?');
        }
        else {
            console.log(`Hello ${userNames} , thank you for loging in again`);
        }
    }
}
console.log(`For non empty userName:\n`);
greetUser(userName);
// to make an Empty array case we have to asssign an empty array to userName.
userName = [];
console.log(`\n\n For empty userName:\n`);
greetUser(userName);
