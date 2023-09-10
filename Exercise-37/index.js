"use strict";
/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
function make_shirt(size = "large", message = "I love TypeScript") {
    return console.log(`Size: ${size}, Message: '${message}'`);
}
// Large shirt with default message
make_shirt("Large"); // output: size: large, message: "I love TypeScript";
// Medium shirt with default message
make_shirt("Medium"); // output: size: medium, message: "I love TypeScript";
//custom shirt with a different message and size
make_shirt("Small", "Hello, TypeScript"); // output: size: small, message: "Hello, TypeScript";
