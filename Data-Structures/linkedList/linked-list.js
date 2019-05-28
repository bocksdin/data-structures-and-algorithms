'use strict';

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insert() {
    const args = arguments;
    for (let arg of args) {
      if (this.head === null) {
        this.head = new Node(arg);
      } else {
        const newHead = new Node(arg);
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
    const vals = arguments[0];
    let i = 0;
    if (this.head === null) {
      this.head = new Node(vals[i]);
      i++;
    }
    let current = this.head;
    while(current !== null) {
      if (current.next === null) {
        if (i < vals.length) {
          current.next = new Node(vals[i]);
          i++;
        }
      }

      current = current.next;
    }
  }

  insertBefore() {
    const args = Object.values(arguments);
    const reference = args[0];
    const vals = args.slice(1);
    let i = 0;
    let current = this.head;
    if (!this.head) {
      return 'Node does not exist!';
    }
    while (current !== null) {
      if (current.value === reference && i < vals.length) {
        this.insert(vals[i]);
        i++;
        current = this.head;
      } else if (current.next) {
        if (current.next.value === reference) {
          if (i < vals.length) {
            const nodeToInsert = new Node(vals[i]);
            nodeToInsert.next = current.next;
            current.next = nodeToInsert;
            i++;
          }
        }
        current = current.next;
      } else {
        return 'Node does not exist!';
      }
    }
  }

  insertAfter() {

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