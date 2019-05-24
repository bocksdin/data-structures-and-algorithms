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
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}