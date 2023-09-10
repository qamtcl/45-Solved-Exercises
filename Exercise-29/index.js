"use strict";
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
// Define the array of favourite fruits
let favorite_fruits = ['pineapple', 'chiko', 'lemon'];
// syntex: arrayName.includes('element'); its output will be true or false.
let a = favorite_fruits.includes('pineapple');
console.log(a);
// check for speific fruits ussing independent if statements.
if (favorite_fruits.includes('pineapple')) {
    console.log('I like pineapples!');
}
if (favorite_fruits.includes('chiko')) {
    console.log('I like chikos!');
}
if (favorite_fruits.includes('lemon')) {
    console.log('I like lemons!');
}
if (favorite_fruits.includes('apple')) {
    console.log('I like apples!');
}
if (favorite_fruits.includes('mango')) {
    console.log('I like mangos!');
}
