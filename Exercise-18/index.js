"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.
1- Store the locations in a array. Make sure the array is not in alphabetical order.

2- Print your array in its original order.

3- Print your array in alphabetical order without modifying the actual list.

4- Show that your array is still in its original order by printing it.

5- Print your array in reverse alphabetical order without changing the order of the original list.

6- Show that your array is still in its original order by printing it again.

7- Reverse the order of your list. Print the array to show that its order has changed.

8- Reverse the order of your list again. Print the list to show it’s back to its original order.

9- Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

10- Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
/*Problem: 01
Store the five places locations in a array. Make sure the array is not in alphabetical order.*/
let travelDestinations = ['Kerbla', 'Najaf', 'Mashhad', 'Kum', 'Kazmain'];
/* Problem: 02
Print your array in alphabetical order without modifying the actual list.*/
console.log(`Original Order:`, travelDestinations);
/* Problem:03
Print your array in alphabetical order without modifying the actual list.*/
console.log('\nAlphabatical Order without modifying the actual list');
console.log([...travelDestinations].sort());
/* Problem: 04
Show that your array is still in its original order by printing it.*/
console.log("\nOriginal order by printing it.");
console.log(travelDestinations);
/* Problem: 05
 Print your array in reverse alphabetical order without changing the order of the original list.*/
console.log('\nReverse alphabetical order without changing the order of the original list');
console.log([...travelDestinations].sort().reverse());
/* Problem: 06
Show that your array is still in its original order by printing it again.*/
console.log("\nOriginal order after printing it.");
console.log(travelDestinations);
/* Problem: 07
Reverse the order of your list. Print the array to show that its order has changed.*/
console.log("\nReverse order, order has changed. ");
travelDestinations.reverse();
console.log(travelDestinations);
/* Problem: 08
Reverse the order of your list again. Print the list to show it’s back to its original order.*/
console.log("\nAgain reverse order, back to its original order . ");
travelDestinations.reverse();
console.log(travelDestinations);
/* Problem:09
Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.*/
console.log("\nAlphabatical order, order has been changed . ");
travelDestinations.sort();
console.log(travelDestinations);
/* Problem: 10
Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
console.log("\nReverse Alphabatical order, print to show order has changed. ");
travelDestinations.sort().reverse();
console.log(travelDestinations);
