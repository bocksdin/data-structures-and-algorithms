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
    testTree.root.leftChild = new BinaryTree.Node(2);
    testTree.root.rightChild = new BinaryTree.Node(8);

    expect(testTree.root).toBeDefined();
    expect(testTree.root.leftChild).toBeDefined();
    expect(testTree.root.rightChild).toBeDefined();
  });

  it('should return a list of the nodes in the tree', () => {
    expect(testTree.preOrder()).toStrictEqual([5, 2, 8]);
  });
});

// describe('A binary tree should also', () => {});

// describe.each([
//   [expect(new BinarySearchTree().add())., true],
// ])(
//   'A binary search tree',
//   (received, expected) => {
//     it('should be able to add a new node', () => {

//     });
//   }
// );