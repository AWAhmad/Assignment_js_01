//****ABDUL WAHEED****//            //****04/10/2022****//

// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature.
// Print the Object that’s returned to make sure all the information was
// stored correctly.

let Cars = {};

function make_car(make, model, rest) {
  Cars.make = make;
  Cars.model = model;
  Cars = { ...Cars, ...rest };
  //   console.log(rest);

  return Cars;
}

make_car("CIVIC", "1212", { color: "red", str: "Right" });
make_car("CIVIC", "1212", { seats: 2, sunRoof: "yes" });
console.log(make_car("CIVIC", "1212", { AC: "Yes", Mode: "Auto" }));
