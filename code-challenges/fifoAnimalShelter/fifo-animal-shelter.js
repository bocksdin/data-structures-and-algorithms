'use strict';

module.exports = class AnimalShelter {
  constructor() {
    this.length = 0;
    this.front = null;
    this.back = null;
  }

  enqueue(...values) {
    let newNode;
    if (!this.length) {
      newNode = new Node(values[0]);
      this.back = newNode;
      this.front = newNode;
      values.slice(1).forEach(val => {
        newNode = new Node(val);
        newNode.previous = this.back;
        newNode.previous.next = newNode;
        this.back = newNode;
      });
      this.length += values.length;
    } else {
      values.forEach(val => {
        newNode = new Node(val);
        newNode.previous = this.back;
        this.back = newNode;
      });
      this.length += values.length;
    }
  }

  dequeue() {
    if (!this.front) return 'The queue is empty!';
    let result = this.front.value;
    if (this.front.next) {
      this.front.next.previous = null;
      this.front = this.front.next;
    } else {
      this.front = null;
    }
    this.length--;
    return result;
  }

  toString() {
    let result = '';
    let current = this.front;
    while (current) {
      result += current.value;
      current = current.next;
    }
    return result;
  }
};

class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
};