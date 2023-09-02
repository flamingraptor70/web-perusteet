'use strict';

const hardcodedArray = [5, 3, 10, 20, 2, 7, 1, 8, 300, 4, 6];

const sortArray = (array, order) => {
  if (order === 'asc') {
    array.sort(function (a, b) {
      return a - b;
    });
  } else if (order === 'desc') {
    array.sort(function (a, b) {
      return b - a;
    });
  } else {
    return 'error: not valid order keyword';
  }
};

sortArray(hardcodedArray, 'desc');
console.log(hardcodedArray);
