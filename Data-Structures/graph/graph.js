'use strict';

const LL = require('../linkedList/linked-list');

class Graph {
  constructor() {
    this.adjacencyList = null;
  }

  addNode(node) {
    if (!this.adjacencyList) this.adjacencyList = new Set();
    const newNode = new LL();
    newNode.insert(node);
    this.adjacencyList.add(newNode);
    return newNode;
  }

  size() {
    if (!this.adjacencyList) return 0;
    return this.adjacencyList.size;
  }
}

module.exports = Graph;