'use strict';

const insertionSort = require('./insertion-sort');

xdescribe('InsertionSort', () => {
  test.each([
    [insertionSort([16]), [16]],
    [insertionSort([16, 15]), [15, 16]],
    [insertionSort([16, 15, 8]), [8, 15, 16]],
    [insertionSort([16, 15, 8, 10]), [8, 10, 15, 16]],
    [insertionSort([16, 15, 8, 10, 9]), [8, 9, 10, 15, 16]],
    [insertionSort([16, 15, 8, 10, 9, 25]), [8, 9, 10, 15, 16, 25]],
    [insertionSort(12), 'Expected array as input!']
  ])(
    'Received should be expected',
    (received, expected) => {
      expect(received).toStrictEqual(expected);
    }
  );
});