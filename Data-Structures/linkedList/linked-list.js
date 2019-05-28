'use strict';

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insert() {
    const args = arguments;
    for (let i = 0; i < args.length; i++) {
      if (this.head === null) {
        this.head = new Node(args[i]);
      } else {
        const newHead = new Node(args[i]);
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
    const args = arguments[0];
    let i = 0;
    if (this.head === null) {
      this.head = new Node(args[i]);
      i++;
    }
    let current = this.head;
    while(current !== null) {
      if (current.next === null) {
        if (i < args.length) {
          current.next = new Node(args[i]);
          i++;
        }
      }

      current = current.next;
    }
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