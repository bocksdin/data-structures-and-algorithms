const BinaryTree = require('./tree');
const Queue = require('./../stacksAndQueues/queue');

module.exports = class BinarySearchTree extends BinaryTree {
  add(value) {
    let nodeToAdd = new BinaryTree.Node(value);
    if (!this.root) {
      this.root = nodeToAdd;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.leftChild) {
          current.leftChild = nodeToAdd;
          return;
        } else {
          current = current.leftChild;
        }
      } else {
        if (!current.rightChild) {
          current.rightChild = nodeToAdd;
          return;
        } else {
          current = current.rightChild;
        }
      }
    }
  }

  contains(value) {
    if (!this.root) return false;
    let result = false;
    visit(this.root);

    function visit(node) {
      if (!node) return;
      if (result) return;
      if (node.value === value) result = true;

      visit(node.leftChild);
      visit(node.rightChild);
    }

    return result;
  }
}