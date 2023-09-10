"use strict";
/*Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
9;
//array of magician names.
const magician_names = ["Harry Porter", "David Copperfield", "Mermione Granger", "Prof Albus Dumble", "Ron Weasley"];
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `The Great ${magician}`);
    return greatMagicians;
}
//modify the array to add "the great" to each macgician name.
const greatMagicianNames = make_great(magician_names);
//Call show_magicians() to see that the list has actually been modified.
showMagicians(magician_names);
showMagicians(greatMagicianNames);
