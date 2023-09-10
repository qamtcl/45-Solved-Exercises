// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

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


// console.log(lowercaseName,";",uppercaseName, ";" ,titlecaseName); 
let  i: string[] = [lowercaseName, titlecaseName, uppercaseName];
console.log(i)
