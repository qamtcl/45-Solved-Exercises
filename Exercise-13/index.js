"use strict";
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favoriteModeofTransport = [];
favoriteModeofTransport.push(["motorCycle", "Honda", "red"]),
    favoriteModeofTransport.push(["motorCar", "Toyota", "white"]),
    favoriteModeofTransport.push(["cycle", "Peco", "black"]);
// console.log(favoriteTransport) : not required as per question
// “I would like to own a Honda motorcycle.”
// using for each loop to print a series of statements
favoriteModeofTransport.forEach(([transport, brand, color]) => { console.log(`"I would like to own a ${color} ${brand} ${transport}."`); });
