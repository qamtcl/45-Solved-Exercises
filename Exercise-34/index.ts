/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/

// creating names of pazza

let pizza_Name: string[]= ['BBQ Chicken', 'Margherita', "Pepperoni"];

// use a for loop to print the name of each pizza.

    for (let i = 0; i < pizza_Name.length; i++) {
    console.log(pizza_Name[i]);
}

// print a sentence using the name of the pizza instead of printing just the name of the pizza.

    console.log ("\n These are my favourite pizza:")
    for (let i = 0; i < pizza_Name.length; i++) {
        console.log(` I like ${ pizza_Name[i] } pizza.`);
    }

    // print a line outside of for loop about how much I like pizza.


    console.log(`\n I really love pizza.`);
