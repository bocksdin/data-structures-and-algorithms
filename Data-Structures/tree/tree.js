'use strict';

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let result = [];
    visit(this.root);

    function visit(node) {
      if (!node) return;

      visit(node.leftChild);
      visit(node.rightChild);
    }

    return result;
  }

  inOrder() {

  }

  postOrder() {

  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = this.rightChild = null;
  }
}

BinaryTree.Node = Node;
module.exports = BinaryTree;