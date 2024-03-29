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

/*
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
*/

/*
///////////////////////////////////////
// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Khan');

greet('Hello')('Khan');

// Challenge

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Faiz');
*/

/*
///////////////////////////////////////
// The call and apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  // book:function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(911, 'Faiz Khan');

const eurwings = {
  airline: 'Eurwings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurwings, 23, 'Fariha Shaikh');
console.log(eurwings);

book.call(lufthansa, 92, 'Arfaz');
console.log(lufthansa);

const swiss = {
  airline: 'SwissAir',
  iataCode: 'SA',
  booking: [],
};

book.call(swiss, 811, 'Faisal');

// APPLY method
const flightData = [583, 'Filza'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
*/

/*
///////////////////////////////////////
// The bind Method
// book.call(eurowings,23,'Khan Faiz')

const bookEW = book.bind(eurwings);
const bookLH = book.bind(lufthansa);
const bookSA = book.bind(swiss);
// console.log(lufthansa);

bookEW(23, 'MR Khan');

const bookEW23 = book.bind(eurwings, 23);
bookEW23('MR Khan');
bookEW23('Miss Khan');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Pratial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.23, 100));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value + value * 0.23;

console.log(addVAT(100));

// Challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));
*/

///////////////////////////////////////
// Coding Challenge #1
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option Number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll result are 13,2,4,1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
*/

///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
/*
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE

(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 43;
}

// console.log(isPrivate);
console.log(notPrivate);
*/

///////////////////////////////////////
// Closures
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

///////////////////////////////////////
// More Closure Examples
/*
let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;

  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
// Re-assigning f function

h();
f();
console.dir(f);
*/
// Example 2
/*
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// const perGroup=1000
boardPassengers(180, 5);
*/

///////////////////////////////////////
// Coding Challenge #2
/*
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/
