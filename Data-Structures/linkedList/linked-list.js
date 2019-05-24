'use strict';

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      const newHead = new Node(value);
      newHead.next = this.head.next;
      this.head = newHead;
    }
  }

  includes(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) return true;
      
      current = current.next;
    }

    return false;
  }

  toString() {
    let result = '';
    let current = this.head;
    while (current !== null) {
      if (result === '') {
        result += current.value;
      } else {
        result += ', ' + current.value;
      }

      current = current.next;
    }
    return result;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}