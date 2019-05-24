'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (this.head === null) {
      this.head = new Node(value);
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
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}