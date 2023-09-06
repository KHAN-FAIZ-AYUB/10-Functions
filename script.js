'use strict';

/*
///////////////////////////////////////
// Default Parameters

const bookings = [];

const createbooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassenger=numPassenger||1
  // price=price||199
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createbooking('IGDXB119', 2, 300);
createbooking('AIUK181', 3, 200);
createbooking('UAE911', 5);
createbooking('QA9811', undefined, 800);
*/

///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
/*
const flight = 'IG911';
const faiz = {
  name: 'faiz khan',
  passport: 9876543210,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'IGDXB811';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 9876543210) {
    alert('Checked in');
  } else {
    alert('Wrong Passenger');
  }
};

// checkIn(flight, faiz);
// console.log(flight);
// console.log(faiz);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(faiz);
checkIn(flight, faiz);
*/

///////////////////////////////////////
// Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);



/////////////////////////////////////////

const ktm = function (model) {
  const [firstt, ...other] = model.split(' ');
  return [firstt.toUpperCase(), ...other].join(' ');
};

const compModel = function (model,fns) {
  console.log(`your bike model is: ${ktm(model)}`);
  console.log(fns.name)
};
compModel('ktmrc200', ktm);
