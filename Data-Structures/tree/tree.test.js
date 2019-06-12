"use strict";

const BinaryTree = require("./tree");

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
    expect(testTree.inOrder()).toStrictEqual([2, 5, 8]);
    expect(testTree.postOrder()).toStrictEqual([2, 8, 5]);
  });

  it('breadth first should return a list of the nodes in the tree', () => {
    expect(testTree.breadthFirst()).toBe('528');
    testTree = new BinaryTree();
    expect(testTree.breadthFirst()).toBe('');
  });

  it('findMaximumValue should return the maximum value in the tree', () => {
    testTree.root = new BinaryTree.Node(5);
    testTree.root.leftChild = new BinaryTree.Node(2);
    testTree.root.rightChild = new BinaryTree.Node(8);

    expect(testTree.findMaximumValue()).toBe(8);
  });
});