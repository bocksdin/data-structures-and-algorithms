'use strict';

module.exports = class BinaryTree {
  constructor(root) {
    this.root = root ? new Node(root) : null;
  }

  preOrder() {

  }

  inOrder() {

  }

  postOrder() {

  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}