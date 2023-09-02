'use strict';

const hardcodedArray = [5, 3, 10, 20, 2, 7, 1, 8, 300, 4, 6];

const sortArray = array => {
  array.sort(function (a, b) {
    return a - b;
  });
};
sortArray(hardcodedArray);
console.log(hardcodedArray);
