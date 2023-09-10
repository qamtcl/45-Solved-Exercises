/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/

let guestList: Array<string> = [
  "Major Farhat Hussain Shah",
  "Syed Amer Shah",
  "Ghulam Zahra",
  "Masooma Farhat",
  "Mudaser Ali Syed",
  "Capt Tayyab Hussain Shah",
];
/*Exercise: 16
Point:01
Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.*/

for (let guest of guestList){
    console.log(`Attention Please: Dear ${guest}, Luckily we have found a bigger dinner table.`)
    
}

/*Point: 02 
Add one new guest to the beginning of your array.*/
let newGuestAddInBegining: string = "Syed Lal Shah";
guestList.unshift( newGuestAddInBegining);
// console.log(guestList);

/*Point: 03
Add one new guest to the middle of your array.*/

let newGuestInMiddleOfList: string = "Mussarat Abbas Shah";
let middleIndex: number = Math.floor(guestList.length/2);
guestList.splice(middleIndex, 0, newGuestInMiddleOfList);
// console.log(guestList);

/* Point: 04 
Use append() to add one new guest to the end of your list.*/

let addNewGuestAtEnd: string = "Major Manzoor Hussain shah";
guestList.push(addNewGuestAtEnd);
// console.log(guestList);

/* Point: 05
Print a new set of invitation messages, one for each person in your list.*/

console.log("New set of Invitation")
for(let guest of guestList){
    console.log(`My Dear ${guest}, your goodself invited to dinner.`)
}

export{guestList}


