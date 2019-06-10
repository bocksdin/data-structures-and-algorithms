'use strict';

module.exports = (tree) => {
  if (!tree.root) return null;

  visit(tree.root);

  return tree;
}

const visit = node => {
  if (node.value % 15 === 0) {
    node.value = 'fizzbuzz';
  } else if (node.value % 5 === 0) {
    node.value = 'buzz';
  } else if (node.value % 3 === 0) {
    node.value = 'fizz';
  }

  if (node.leftChild) visit(node.leftChild);
  if (node.rightChild) visit(node.rightChild);
}