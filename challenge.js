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
