'use strict';

const LL = require('../linkedList/linked-list');

module.exports = class Stack {
  constructor() {
    this.data = new LL();
    this.top = this.data.head;
  }

  push(...values) {

  }

  pop() {

  }

  peek() {
    return this.top;
  }

}