'use strict';

const BT = require('../../Data-Structures/tree/tree');
const treeIntersection = require('./tree-intersection');

let bt1 = new BT;
let bt2 = new BT;

const populate = (current, i, multiplier) => {
  if (i > 5) return;
  if (Math.random() > 0.5) {
    current.rightChild = new BT.Node(i * multiplier);
    populate(current.rightChild, i + 1, multiplier);
  } else {
    current.leftChild = new BT.Node(i * multiplier);
    populate(current.leftChild, i + 1, multiplier);
  }
}

(function (bt1, bt2) {
  bt1.root = new BT.Node(1);
  bt2.root = new BT.Node(1);
  populate(bt1.root, 1, 3);
  populate(bt2.root, 1, 2);

})(bt1, bt2);

console.log(bt1.preOrder());
console.log(bt2.preOrder());

describe('The treeIntersection function', () => {
  let received = treeIntersection(bt1, bt2);

  it.each([
    [1, true],
    [2, false],
    [3, false],
    [4, false],
    [6, true],
    [8, false],
    [9, false],
    [10, false],
    [12, false],
    [15, false]
  ])('%s should be %s',
    (value, expected) => {
      expect(received.contains(value)).toBe(expected);
    });
});