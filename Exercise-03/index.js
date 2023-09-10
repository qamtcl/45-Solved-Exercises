"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Mudaser Ali Syed";
//to show in lowercase Name
let lowercaseName = personName.toLowerCase();
//to show in Uppercase Name
let uppercaseName = personName.toUpperCase();
//to show in Titlecase Name
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++)
    [
        titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " "
    ];
// console.log(lowercaseName,";",uppercaseName, ";" ,titlecaseName); 
let i = [lowercaseName, titlecaseName, uppercaseName];
console.log(i);
