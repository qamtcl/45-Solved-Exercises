/*
Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet!*/



// List of animals having common characteristics.   
 
const animals: string[] = ['cow', 'goat', 'buffalo'];

// Using for of loof to print a list of animals.

console.log(`List of animals having common characteristics:`);

for (const animal of animals)
{
    console.log(animal);

}

// Print a statement of each animal.
console.log(` \n Statements about each animal:`);

for (const animal of animals)
{
            if (animal === "cow") 
    {
        console.log(`A ${animal} is best for both milk and meat.`);
    }  
        else if (animal === "goat") 
    {
        console.log(`A ${animal} is best for meat.`);
    } 
        else if (animal === "buffalo") 
    {
        console.log(`A ${animal} good for meat but milk is very tasty.`);
    }

}
// common characteristics of animals

console.log(`\n what are the common characteristics`);
console.log(`\n Any one of animal is useful to keep for milk and meat`);







