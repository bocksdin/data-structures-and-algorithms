"use strict";

const LL = require("../linkedList/linked-list");

module.exports = class Stack {
  constructor() {
    this.data = new LL();
    this.top = this.data.head;
  }

  push(...values) {
    values.forEach(val => this.data.insert(val));
    this.top = this.data.head;
  }

  pop() {
    if (!this.top) return "Cannot pop() from an empty stack!";
    const value = this.top.value;
    this.top = this.top.next || null;
    this.data.head = this.data.head.next || null;
    return value;
  }

  peek() {
    return this.top;
  }
};