"use strict";

const fizzbuzzTree = require("./fizz-buzz-tree");
const BinarySearchTree = require("../../Data-Structures/tree/bst");

xdescribe("FizzbuzzTree", () => {
  let testTree = new BinarySearchTree();
  testTree.add(15);
  testTree.add(5);
  testTree.add(3);
  testTree.add(26);
  testTree.add(4);

  it("should change node values", () => {
    let received = fizzbuzzTree(testTree);

    expect(received.root.value).toBe("fizzbuzz");
    expect(received.root.leftChild.value).toBe("buzz");
    expect(received.root.rightChild.value).toBe(26);
    expect(received.root.leftChild.leftChild.value).toBe("fizz");
  });

  it("should return null given an empty tree", () => {
    testTree = new BinarySearchTree();

    let received = fizzbuzzTree(testTree);
    expect(received).toBeNull();
  });
});
