// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const names: string[]=['Muhammad', 'Ali','Fatima', 'Hassan', 'Hussain'];

// Loop through each name in the array:

for (let name of names){
    // print a personalize message for each friend.

    console.log(`Salam ${name}, Many thanks. `);
}