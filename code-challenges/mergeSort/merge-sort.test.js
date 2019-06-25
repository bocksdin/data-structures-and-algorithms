'use strict';

const mergeSort = require('./merge-sort');

describe('MergeSort', () => {
  it.each([
    [mergeSort([]), []],
    [mergeSort([0]), [0]],
    [mergeSort([16, 0]), [0, 16]],
    [mergeSort([16, 0, 12]), [0, 12, 16]],
    [mergeSort([16, 0, 12, -1]), [-1, 0, 12, 16]],
    [mergeSort([16, 0, 12, -1, 28]), [-1, 0, 12, 16, 28]],
    [mergeSort([16, 0, 12, -1, 28, 12]), [-1, 0, 12, 12, 16, 28]],
    [mergeSort([12, 12, 12, 12, 12, 12]), [12, 12, 12, 12, 12, 12]],
  ])(
    'Received should be expected',
    (received, expected) => {
      expect(received).toStrictEqual(expected);
    }
  )
});