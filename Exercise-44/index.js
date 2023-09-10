"use strict";
/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
function make_sandwich(...items) {
    console.log(`Sandwich Summery:`);
    if (items.length === 0) {
        console.log(`   - You ordered a empty sandwich. Please add some items.`);
    }
    else {
        items.forEach((item, index) => {
            console.log(`     ${index + 1}. ${item}`);
        });
    }
    console.log("\n");
}
// call the function with different numbers of arguments
make_sandwich();
make_sandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise", "Buttter", "Cheese");
make_sandwich("Beef", "Mutton,", "Chicken", "Vegetable");
make_sandwich("Crush Salad", "Chopped Salad", "Sliced Salad");
