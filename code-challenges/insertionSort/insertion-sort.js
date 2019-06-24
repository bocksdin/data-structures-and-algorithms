'use strict';

const insertionSort = arr => {
  if (!(arr instanceof Array)) return 'Expected array as input!'
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];

    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = temp;
  }

  return arr;
}

module.exports = insertionSort;