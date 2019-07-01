'use strict';

class Hashtable {
  constructor() {
    this.data = [];
  }

  hash(key) {
    if (!key) return 'Must provide a key!';
    const sum = key.toString().split('').map(char => char.charCodeAt(0)).reduce((acc, curr) => acc += curr);
    return (sum * sum) % 86;
  }
}

module.exports = new Hashtable();