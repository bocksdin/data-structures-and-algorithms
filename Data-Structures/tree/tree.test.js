"use strict";

const BinaryTree = require("./tree");
const BinarySearchTree = require('./bst');

describe('A binary tree', () => {
  let testTree = new BinaryTree();

  it('should be empty upon instantiation', () => {
    expect(testTree.root).toBeNull();
  });

  it('should have nodes', () => {
    testTree.root = new BinaryTree.Node(5);
    testTree.root.left = new BinaryTree.Node(2);
    testTree.root.right = new BinaryTree.Node(8);

    expect(testTree.root).toBeDefined();
    expect(testTree.root.left).toBeDefined();
    expect(testTree.root.right).toBeDefined();
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