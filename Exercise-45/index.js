"use strict";
/*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/
function car_info(manufacturer, model, ...properties) {
    const car = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
// example of usage
const mycar = car_info("Toyota", "Corolla", ["color", "red"], ["optional Feature", "Sun Roof"], ["speed", " 272 Km/hr"]);
console.log(mycar);
