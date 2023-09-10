"use strict";
/*
City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
// arrow functions
const city_country = (city, country) => {
    return `"${city}, ${country}"`;
};
// Test the function with four city-country pairs.
console.log(city_country("Najaf", "Iraq"));
console.log(city_country("Mashad", "Iran"));
console.log(city_country("Damascus", "Syria"));
console.log(city_country("Islamabad", "Pakistan"));
