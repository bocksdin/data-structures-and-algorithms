'use strict';

const LL = require('../linkedList/linked-list');

class Graph {
  constructor() {
    this.adjacencyList = null;
  }

  addNode(node) {
    if (!this.adjacencyList) this.adjacencyList = [];

    const exists = this.adjacencyList.find(i => i.head.value === node);
    if (exists) return 'Node already exists!';

    const newNode = new LL();
    newNode.insert(node);
    this.adjacencyList.push(newNode);
    return newNode;
  }

  size() {
    if (!this.adjacencyList) return 0;
    return this.adjacencyList.length;
  }
}

module.exports = Graph;