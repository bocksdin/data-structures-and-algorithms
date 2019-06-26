'use strict';

const quickSort = require('./quick-sort');

describe('A quickSort algorithm', () => {
  it.each([
    [quickSort([]), []],
    [quickSort([10], 0, 0), [10]],
    [quickSort([10, 1], 0, 1), [1, 10]],
    [quickSort([10, 1, 5], 0, 2), [1, 5, 10]],
    [quickSort([10, 1, 5, 8, 10, 23, 255], 0, 6), [1, 5, 8, 10, 10, 23, 255]]
  ])(
    '%s should be %s',
    (received, expected) => {
      expect(received).toStrictEqual(expected);
    }
  )
});