"use strict";
/* Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/
function transporttypes(Brand, Type, Capacity) {
    return {
        Brand,
        Type,
        Capacity,
    };
}
//creation of Array of objects
const transports = [
    transporttypes('Toyota', 'Van', 20),
    transporttypes('Bedford', 'Bus', 72),
    transporttypes('Hino', 'Bus', 80),
    transporttypes('Honda', 'Car', 4),
    transporttypes('Yamaha', 'Bike', 2)
];
//access an invalid index.
const invalidIndex = 10; // we mention only 5 nbr of elements in the above array, so it will surely cause an error.
console.log(`Transport at index ${invalidIndex}:`, transports[invalidIndex]);
//print the transport type
transports.forEach((transport) => {
    console.log(`Brand: ${transport.Brand}, Type: ${transport.Type}, Capacity: ${transport.Capacity}`);
});
