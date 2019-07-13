'use strict';

module.exports = class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  insert() {
    const args = arguments;
    for (let arg of args) {
      if (this.head === null) {
        this.head = new Node(arg);
        this.length++;
      } else {
        const newHead = new Node(arg);
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
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
    const vals = arguments;
    let i = 0;
    if (this.head === null) {
      this.head = new Node(vals[i]);
      this.length++;
      i++;
    }
    let current = this.head;
    while (current !== null) {
      if (current.next === null) {
        if (i < vals.length) {
          current.next = new Node(vals[i]);
          this.length++;
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
            this.length++;
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
    const args = Object.values(arguments);
    const reference = args[0];
    const val = args[1];
    let current = this.head;
    if (!this.head) {
      return 'Node does not exist!';
    }
    while (current !== null) {
      if (current.value === reference) {
        current.next = new Node(val);
        this.length++;
        return;
      }

      current = current.next;
    }

    return 'Node does not exist!';
  }

  delete() {
    const reference = arguments[0];
    let current = this.head;
    if (!this.head) {
      return 'Node does not exist!';
    }
    while (current !== null) {
      if (current.next) {
        if (current.next.value === reference) {
          current.next = current.next.next;
          this.length--;
          return;
        }
      } else if (current.value === reference) {
        this.head = current.next;
        this.length--;
        return;
      }

      current = current.next;
    }

    return 'Node does not exist!';
  }

  kth(nodeLoc) {
    let current = this.head;
    const loopTime = this.length - 1 - Math.abs(nodeLoc);
    if (!this.head || loopTime < 0) {
      return 'Node does not exist!';
    }

    for (let i = 0; i <= loopTime; i++) {
      if (i === loopTime) {
        return current.value;
      }

      current = current.next;
    }
  }

  middle() {
    let current = this.head;
    const loopTime = Math.floor((this.length - 1) / 2);
    if (!this.head) {
      return 'List is empty!';
    }

    for (let i = 0; i <= loopTime; i++) {
      if (i === loopTime) {
        return current.value;
      }

      current = current.next;
    }
  }

  toString() {
    let result = '';
    let current = this.head;
    while (current !== null) {
      if (result === '') {
        result += JSON.stringify(current.value);
      } else {
        result += ', ' + JSON.stringify(current.value);
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