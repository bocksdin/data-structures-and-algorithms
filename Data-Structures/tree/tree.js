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
}

class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = this.rightChild = null;
  }
}


BinaryTree.Node = Node;
module.exports = BinaryTree;


// FOR ADDING AND I DON'T KNOW WHY IT DOESN'T WORK YET
// let queue = new Queue();
//     queue.enqueue(this.root);
//     let current = queue.dequeue();

//     while (true) {

//       if (!current.leftChild) {
//         current.leftChild = nodeToAdd;
//         return;
//       }

//       if (!current.rightChild) {
//         current.rightChild = nodeToAdd;
//         return;
//       }
//       if (current.leftChild)
//         queue.enqueue(current.leftChild);
//       if (current.rightChild)
//         queue.enqueue(current.rightChild);
//       current = queue.dequeue();
//     }