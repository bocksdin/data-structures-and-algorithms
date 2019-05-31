'use strict';

module.exports = class Queue {
  constructor() {
    this.length = 0;
    this.front = null;
    this.back = null;
  }

  enqueue() {

  }

  dequeue() {

  }

  peek() {

  }
};

class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
};