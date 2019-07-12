'use strict';

const LL = require('../linkedList/linked-list');

class Graph {
  constructor() {
    this.adjacencyList = null;
  }

  size() {
    if (!this.adjacencyList) return 0;
    return this.adjacencyList.length;
  }
}

module.exports = Graph;