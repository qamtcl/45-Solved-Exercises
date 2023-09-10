// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

/*
Date: 19/09/2023.
Time: 15.48 hrs*/


let personName: string = "Mudaser Ali Syed"

//to show in lowercase Name
let lowercaseName: string = personName.toLowerCase(); 

//to show in Uppercase Name
let uppercaseName: string = personName.toUpperCase(); 

//to show in Titlecase Name
let words: string[] = personName.split(" ");
let titlecaseName: string = "";
for (let i = 0 ; i < words.length; i++ )[
    titlecaseName += words[i].charAt(0).toUpperCase() +  words[i].slice(1).toLowerCase()+" "  ];


console.log(lowercaseName,";",uppercaseName, ";" ,titlecaseName); 
