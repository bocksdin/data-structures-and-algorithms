"use strict";

const Stack = require("../../Data-Structures/stacksAndQueues/stack");

module.exports = class PseudoQueue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(...values) {
    if (!values.length) return "Please enter some values to add!";
    this.s1.push(...values);
  }

  dequeue() {
    if (!this.s1.top) return "The queue is empty!";
    this.s1.top = this.s1.top;
    let current = this.s1.top;
    while (current) {
      const val = this.s1.pop();
      this.s2.push(val);
      current = current.next;
    }
    const result = this.s2.pop();
    current = this.s2.top;
    while (current) {
      const val = this.s2.pop();
      this.s1.push(val);
      current = current.next;
    }
    return result;
  }
};