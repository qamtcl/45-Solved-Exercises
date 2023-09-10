"use strict";
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
// Array of Magician names
const magician_Names = ["Harry Porter", "David Copperfield", "Hermione Granger", "Prof Albus Dumble", "Ron Weasley"];
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => ' The Great ${magician}');
    return greatMagicians;
}
// modigy he array to add "The Great" to each magician name.
const greatMagicianNames = make_great(magician_Names);
// call the function to show the original magician names.
console.log("Orginal Magician:");
showMagicians(magician_Names);
// call the function to show 'The Great' with  magician names.
console.log(`\nGreat Magicians`);
showMagicians(greatMagicianNames);
