'use strict';

const Queue = require('./../stacksAndQueues/queue');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let result = [];
    visit(this.root);

    function visit(node) {
      if (!node) return;

      result.push(node.value);
      visit(node.leftChild);
      visit(node.rightChild);
    }

    return result;
  }

  inOrder() {
    let result = [];
    visit(this.root);

    function visit(node) {
      if (!node) return;

      visit(node.leftChild);
      result.push(node.value);
      visit(node.rightChild);
    }

    return result;
  }

  postOrder() {
    let result = [];
    visit(this.root);

    function visit(node) {
      if (!node) return;

      visit(node.leftChild);
      visit(node.rightChild);
      result.push(node.value);
    }

    return result;
  }

  breadthFirst() {
    let queue = new Queue();
    if (this.root) queue.enqueue(this.root);

    let result = '';
    while (queue.front) {
      let current = queue.dequeue();
      current.leftChild ? queue.enqueue(current.leftChild) : '';
      current.rightChild ? queue.enqueue(current.rightChild) : '';
      result += current.value;
    }

    return result;
  }

  findMaximumValue() {
    let max = 0;
    visit(this.root);

    function visit(node) {
      if (!node) return;

      if (node.value > max) max = node.value;
      visit(node.leftChild);
      visit(node.rightChild);
    }

    return max;
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