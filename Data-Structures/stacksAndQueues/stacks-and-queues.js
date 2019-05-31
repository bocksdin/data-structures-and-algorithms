'use strict';

const LL = require('../linkedList/linked-list');

module.exports = class Stack {
  constructor() {
    this.data = new LL();
    this.top = this.data.head;
  }

  push(value) {
    this.data.insert(value);
    this.top = this.data.head;
  }

  pop() {

  }

  peek() {
    return this.top;
  }

}