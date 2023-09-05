'use strict';

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
