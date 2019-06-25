'use strict';

const BinarySearchTree = require('./bst');

xdescribe('A Binary Search Tree', () => {
  let testTree = new BinarySearchTree();

  it('should be empty upon instantiation', () => {
    expect(testTree.root).toBeNull();
  });

  it('should be able to add new nodes to the tree', () => {
    testTree.add(5);
    testTree.add(2);
    testTree.add(6);
    testTree.add(10);
    testTree.add(11);
    testTree.add(4);
    testTree.add(1);
    expect(testTree.root.value).toBe(5);
    expect(testTree.root.leftChild.value).toBe(2);
    expect(testTree.root.rightChild.value).toBe(6);
    expect(testTree.root.rightChild.rightChild.value).toBe(10);
    expect(testTree.root.rightChild.rightChild.rightChild.value).toBe(11);
    expect(testTree.root.leftChild.rightChild.value).toBe(4);
    expect(testTree.root.leftChild.leftChild.value).toBe(1);
  });

  it('should be able to return true/false if the passed value exists/doesn\'t exist', () => {
    expect(testTree.contains(5)).toBe(true);
    expect(testTree.contains(2)).toBe(true);
    expect(testTree.contains(200)).toBe(false);
  });
});