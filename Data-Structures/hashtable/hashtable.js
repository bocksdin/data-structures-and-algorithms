'use strict';

const LL = require('../linkedList/linked-list');

class Hashtable {
  constructor() {
    this.data = [];
  }

  add(obj) {
    if (!obj) return 'Must provide an object!';
    let key = Object.keys(obj)[0];
    const index = this.hash(key);
    if (!this.data[index]) this.data[index] = new LL();
    this.data[index].insert(obj);
    return this.data[index].head;
  }

  get(key) {
    if (!key) return 'Must provide a key!';

    const index = this.hash(key);
    let current = this.data[index] ? this.data[index].head : null;
    while (current) {
      if (current.value[key]) return current.value;

      current = current.next;
    }

    return current;
  }

  contains(key) {
    if (!key) return 'Must provide a key!';
    return !!this.get(key);
  }

  hash(key) {
    if (!key) return 'Must provide a key!';
    const sum = key.toString().split('').map(char => char.charCodeAt(0)).reduce((acc, curr) => acc += curr);
    return (sum * sum) % 86;
  }
}

module.exports = new Hashtable();