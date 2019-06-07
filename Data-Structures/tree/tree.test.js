'use strict';

const BinaryTree = require('./tree');

describe.each([
  [new BinaryTree().root, null]
])(
  'A binary tree should',
  (received, expected) => {
    it('be empty on instantiation with no arguments', () => {
      expect(received).toBe(expected);
    });
  }
);