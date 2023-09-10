"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
let guestList = [
    "Major Farhat Hussain Shah",
    "Syed Amer Shah",
    "Ghulam Zahra",
    "Masooma Farhat",
    "Mudaser Ali Syed",
    "Capt Tayyab Hussain Shah"
];
exports.guestList = guestList;
// Step-1:print statement at the end of your program stating the name of the guest who can’t make it.
let guestwhocannotmakeit = "Capt Tayyab Hussain Shah";
console.log(`${guestwhocannotmakeit}: the guest who cannot make it to dinner`);
// Step-2 replace the name of the guest who cannot make it.
let newGuest = "Syed Ali Abbas";
let indexOfguestwhocannotmakeit = guestList.indexOf(guestwhocannotmakeit);
// console.log(indexOfguestwhocannotmakeit) we use it only to findout index number in the Array.
if (indexOfguestwhocannotmakeit !== -1) {
    guestList[indexOfguestwhocannotmakeit] = newGuest; //replace the value with new value.
}
console.log(guestList[5], ":the new guest"); //just for the checking purpose only.
// Step-3 Print a second set of invitation messages, one for each person who is still in your list
console.log("2nd set of invitation messages");
guestList.forEach((guest) => {
    console.log(`My Dear ${guest}, your goodself invited to dinner.`);
});
