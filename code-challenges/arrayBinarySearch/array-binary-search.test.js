'use strict';

const binarySearch = (arr, num) => {
  
}

describe('Binary Search', () => {
  it('should return the index of the given number within the given array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const find = numbers[3];

    const received = binarySearch(numbers, find);
    const expected = numbers.indexOf(find);

    expect(received).toBe(expected);
  });
});