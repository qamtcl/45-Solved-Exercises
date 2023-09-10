"use strict";
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
// Tests for equality and inequality with strings
const stringEqulity = 'Classic view';
const stringInequality = 'classic view';
console.log("Tests for equality and inequality with strings");
console.log(stringEqulity === stringInequality);
console.log(stringEqulity !== stringInequality);
// Tests using the lower case function.
const word1 = 'TRY AGAIN';
const word2 = 'try again';
console.log('Tests using the lower case function.');
console.log(word1.toLowerCase() === word2);
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
const num1 = 12;
const num2 = 14;
console.log('num1 === num2', +num1 === num2);
console.log('num1 == num2', +num1 == num2);
console.log('num1 !== num2', +num1 !== num2);
console.log('num1 < num2', +num1 < num2);
console.log('num1 > num2', +num1 > num2);
console.log('num1 <= num2', +num1 <= num2);
console.log('num1 >= num2', +num1 >= num2);
// Tests using "and" and "or" operators
const x = 300;
const y = 200;
const z = 110;
console.log('x < y && y < z', +x < y && y < z);
console.log('x > y || y > z', +x > y || y > z);
console.log('x > y && y > z', +x > y && y > z);
console.log('x < y || y < z', +x < y || y < z);
// Test whether an item is in a array
const vehicle = ['car', 'truck', 'bus', 'van'];
console.log('Test whether an item is in a array');
console.log(vehicle.includes('bus'));
console.log(vehicle.includes('bike'));
console.log(vehicle.includes('van'));
console.log(vehicle.includes('tractor'));
// Test whether an item is not in a array
const birds = ['Eagle', 'crow', 'chicken', 'duck'];
console.log('Test whether an item is not in a array');
console.log(!birds.includes('chicken'));
console.log(!birds.includes('crow'));
console.log(!birds.includes('owl'));
console.log(!birds.includes('cow'));
