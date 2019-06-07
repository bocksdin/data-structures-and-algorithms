'use strict';

const BinaryTree = require('./tree');

describe.each([
  [new BinaryTree().root, null],
  [new BinaryTree(5).root.value, 5],
])(
  'A binary tree',
  (received, expected) => {
    it('should be empty on instantiation with no arguments', () => {
      expect(received).toBe(expected);
    });

    it('should have a root if instantiated with an argument', () => {
      expect(received).toBe(expected);
    });
  }
);