// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList: Array <string> = [

    "Major Farhat Hussain Shah",
    "Syed Amer Shah",
    "Ghulam Zahra",
    "Masooma Farhat",
    "Mudaser Ali Syed",
    "Capt Tayyab Hussain Shah"

];

// Loop for each to printout invitation

guestList.forEach((guestName) => 
{  console.log(`My Dear ${guestName}, Your Good-self invited to dinner. `)

})

export{guestList}
