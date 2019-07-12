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

  addEdge(n1, n2, weight) {
    let node1 = this.adjacencyList.find(i => i.head.value === n1);
    if (!node1) return `${n1} doesn't exist!`;

    let node2 = this.adjacencyList.find(i => i.head.value === n2);
    if (!node2) return `${n2} doesn't exist!`;

    node1.append({ node: n2, weight });
    node2.append({ node: n1, weight });
  }

  size() {
    if (!this.adjacencyList) return 0;
    return this.adjacencyList.length;
  }
}

module.exports = Graph;