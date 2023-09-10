
/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/

const make_shirt = (size: string, message: string): void => 
{
console.log(`size: ${size}, message: ${message}`);

}

// call the function, two ways to call the function

//1st way: call the function with the size and message variables.
let size: string = "Medium";
let message: string = "Made by Finest Materials";
make_shirt(size, message);

//2nd way: call the function directly 
make_shirt("Large", "Made with strechable materials");