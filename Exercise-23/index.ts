/*Exercise-23

Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/



let car = 'subaru';

// Test: 01
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')// True

// Test: 02
console.log("Is car == 'honda'? I predict True.")
console.log(car == 'honda');// false


// Test: 03
console.log("Is car == 'Subaru'? I predict True.")
console.log(car == 'Subaru')//false  

// Test:04 
console.log(car === 'subaru')// true

// Test:05
console.log("Is car !== 'subaru'? I predict True.")
console.log(car !== 'subaru') // false

// Test:06
console.log("Is car !== 'honda'? I predict True.")
console.log(car !== 'honda') // true

let bus = "Hino"
// Test:07
console.log("Is bus !== 'Hino'? I predict True.")
console.log(bus !== 'Hino')


let horse = "horse"
// Test:08
console.log("Is horse !== 'horse'? I predict True.")
console.log(car !== 'horse') //true

// Test:09

console.log("Is car !== 'Mazda'? I predict True.")
console.log(car !== 'Mazda') //true

let age = 25

// Test:10
console.log("Is age !== 25? I predict True.")
console.log(age !== 25)  // false.