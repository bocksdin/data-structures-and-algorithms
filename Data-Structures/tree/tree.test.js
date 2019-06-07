"use strict";

const {
  BinaryTree,
  BinarySearchTree
} = require("./tree");

let emptyTree = new BinaryTree();
let rootTree = new BinaryTree(5);
let rootTreePre = rootTree.preOrder(rootTree.root);

describe.each([
  [emptyTree.root, null],
  [rootTree.root.value, 5],
  [rootTreePre, [5]]
])("A binary tree", (received, expected) => {
  it(`${received} is to be ${expected}`, () => {
    expect(received).toStrictEqual(expected);
  });
});

// describe.each([
//   [expect(new BinarySearchTree().add())., true],
// ])(
//   'A binary search tree',
//   (received, expected) => {
//     it('should be able to add a new node', () => {

//     });
//   }
// );