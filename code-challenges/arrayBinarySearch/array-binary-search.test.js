"use strict";

const binarySearch = (arr, num) => {
  if (typeof num !== "number") {
    throw "NaN entered!";
  } else if (num === arr[arr.length - 1]) {
    return arr.length - 1;
  } else if (num === arr[0]) {
    return 0;
  }

  let left = 0;
  let right = arr.length - 1;
  let currIndex = Math.floor(arr.length / 2);

  const newCurrIndex = () => {
    currIndex = newMiddle(right, left);
  };

  while (true) {
    if (left === right - 1 && num !== arr[left] && num !== arr[right]) {
      return -1;
    } else if (num > arr[currIndex]) {
      left = currIndex;
      newCurrIndex();
    } else if (num < arr[currIndex]) {
      right = currIndex;
      newCurrIndex();
    } else {
      return currIndex;
    }
  }
};

const newMiddle = (right, left) => {
  return Math.floor((right - left) / 2) + left;
};

describe("Binary Search", () => {
  it("should return the index of the given number within the given array", () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    numbers = numbers.map(value => Math.pow(value, 2));
    const find = numbers[4];

    const received = binarySearch(numbers, find);
    const expected = numbers.indexOf(find);

    expect(received).toBe(expected);
  });

  it("should return the index of the given number within the given array", () => {
    let numbers = [];
    for (let i = 0; i < 10000; i++)
      numbers.push(i);      
    const find = numbers[4];

    const received = binarySearch(numbers, find);
    const expected = numbers.indexOf(find);

    expect(received).toBe(expected);
  });

  it("should return the index of the given number within the given array", () => {
    let numbers = [];
    for (let i = 0; i < 100000; i++)
      numbers.push(i);      
    const find = numbers[4];

    const received = binarySearch(numbers, find);
    const expected = numbers.indexOf(find);

    expect(received).toBe(expected);
  });

  it("should return the index of the given number within the given array", () => {
    let numbers = [];
    for (let i = 0; i < 100000000; i++)
      numbers.push(i);      
    const find = numbers[4];

    const received = binarySearch(numbers, find);
    const expected = numbers.indexOf(find);

    expect(received).toBe(expected);
  });

  it("should return the index of the first number within the given array", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const find = numbers[0];

    const received = binarySearch(numbers, find);
    const expected = numbers.indexOf(find);

    expect(received).toBe(expected);
  });

  it("should return the index of the last number within the given array", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const find = numbers[numbers.length - 1];

    const received = binarySearch(numbers, find);
    const expected = numbers.indexOf(find);

    expect(received).toBe(expected);
  });

  it("should return -1 because the value doesn't exist", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const find = 50;

    const received = binarySearch(numbers, find);
    const expected = numbers.indexOf(find);

    expect(received).toBe(expected);
  });
});
