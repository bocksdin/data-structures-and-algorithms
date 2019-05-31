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
    if (!this.top) return 'Cannot pop() from an empty stack!';
    const value = this.top.value;
    this.top = this.top.next || null;
    return value;
  }

  peek() {
    return this.top;
  }

}