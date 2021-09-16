"use strict";

// Challenge 1 Return sum of two numbers

const addition = (a, b) => console.log(a + b);

addition(1, 4);

// challenge 2 Return the first value in an array

const firstValue = (arr) => console.log(arr[0]);

firstValue([1, 5, 2, 7, 3]);

// Challenge 3 Return the area of a triangle
const areaTriangle = (base, height) => console.log((base * height) / 2);
areaTriangle(23, 5);

// challenge 4 Minutes to second converter

const convertSecond = (minute) =>
  console.log(`${minute} minutes is ${minute * 60} seconds `);
convertSecond(2);

// challenge 5 Slice the two numbers and swap it and determine which is bigger
const lasrgestSwap = function (num) {
  const firstDigit = num.toString().slice(0, 1);
  const secondDigit = num.toString().slice(1, 2);
  const newDigit = secondDigit + firstDigit;
  if (firstDigit !== secondDigit) {
    return num > newDigit;
  } else return true;
};
lasrgestSwap(12);

// challenge 5 increment the number by 1
const increment = (num) => console.log(num + 1);
increment(0);

// challenge 5 Return the highest value in the array

// Solution 1 using spread operator and Math method
const arr = [1, 2, 4, 5];
// We use the spread operator to get all the value in the array
const minMax = function (arr) {
  const newArr = [];
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  newArr.push(min, max);
  console.log(newArr);
};
minMax(arr);

// best Solution is
const minMax2 = function (arr) {
  return [Math.max(...arr), Math.min(...arr)];
};
minMax2(arr);

// challenge 6 Add up the Numbers from a Single Number
const addUp = function (num) {
  let value = 0;
  for (let i = 0; i <= num; i++) {
    value += i;
  }
  console.log(value);
};

// challenge 7 match sticks
const matchHouse = function (step) {
  if (step === 0) {
    return (step = 0);
  } else if (step === 1) {
    return (step = 6);
  } else {
    return step * 5 + 1;
  }
};

// challenge 8 age to days converter
// I use class in doing this as a practice

class Converter {
  constructor(age) {
    this.age = age;
  }
  calcAge() {
    console.log(`Your age in terms of days is ${this.age * 365}`);
  }
}

const ronald = new Converter(7);
ronald.calcAge();

// challenge 9
// // Callback Functions
//we need to use to returm in order first return to the new argument and return to the baseNume
function makePlusFunction(baseNum) {
  return function (newArgument) {
    return console.log(baseNum + newArgument);
  };
}
makePlusFunction(10)(10);

// const ronassld = prompt("whats your name");
// console.log(ronassld);

// Challenge 10 Rolling a dice
const possibleBonus = function (a, b) {
  let bonus = "";
  const difference = b - a;
  return difference <= 6 && difference > 0 ? (bonus = true) : (bonus = false);
  // if (difference <= 6 && difference > 0) {
  //   bonus = true;
  //   console.log(bonus);

  //   return bonus;
  // } else {
  //   bonus = false;
  //   console.log(bonus);
  //   return bonus;
  // }

  // using ternary operator
};

possibleBonus(6, 3);

// Challenge 11 polygon
const sumPolygon = function (n) {
  return (n - 2) * 180;
};

// challenge 12 which is larger
const whichIsLarger = function (f, g) {
  if (f !== g) {
    return f > g ? f : g;
  } else {
    return "neither";
  }
};
const whichIsLarger = function (f, g) {
  if (f > g) {
    return f;
  } else if (g > f) {
    return f;
  } else if ((f = g)) {
    return "neither";
  }
};
