'use strict';

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(values) {
    for (let i = 0; i < values.length; i++) {
      if (this.head === null) {
        this.head = new Node(values[i]);
      } else {
        const newHead = new Node(values[i]);
        newHead.next = this.head;
        this.head = newHead;
      }
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

  append() {
    
  }

  insertBefore(reference, ...args) {

  }

  insertAfter(reference, ...args) {

  }

  delete() {

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