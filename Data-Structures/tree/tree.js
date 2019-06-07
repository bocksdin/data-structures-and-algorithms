'use strict';

class BinaryTree {
  constructor(root) {
    this.root = root ? new Node(root) : null;
    this.output = [];
  }

  preOrder(node) {
    this.output.push(node.value);

    if (node.leftChild) {
      this.preOrder(node.leftChild);
    } else if (node.rightChild) {
      this.preOrder(node.rightChild);
    } else {
      return this.output;
    }
  }

  inOrder() {

  }

  postOrder() {

  }
}

class BinarySearchTree {
  constructor(value) {
    this.data = new BinaryTree(value);
  }

  add() {

  }

  contains() {

  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

module.exports = {
  BinaryTree,
  BinarySearchTree
};