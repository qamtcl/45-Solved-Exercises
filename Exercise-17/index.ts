/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/


let guestList: Array <string> = [

'Syed Lal Shah',
'Major Farhat Hussain Shah',
'Syed Amer Shah',
'Mussarat Abbas Shah',
'Ghulam Zahra',
'Masooma Farhat',
'Mudaser Ali Syed',
'Capt Tayyab Hussain Shah',
'Major Manzoor Hussain shah'

]

// Step-01
//  Add a new line that prints a message saying that you can invite only two people for dinner.

console.log(`I can invite only two people for dinner`);

/* Step: 02
Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.*/

while(guestList.length > 2){
    let removeGuest = guestList.pop()
    console.log(`My Dear ${removeGuest}, I am sorry your goodself can’t be invited to dinner.`)
}

/*Step: 03
Print a message to each of the two people still on your list, letting them know they’re still invited.*/

for(let guest of guestList){
console.log(`My Dear ${guest}, please to invite your goodself as you are still invited.`)
}

/* Point: 04
Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

guestList.pop();
guestList.pop();
console.log(`Empty guest List`, guestList);

export{guestList}