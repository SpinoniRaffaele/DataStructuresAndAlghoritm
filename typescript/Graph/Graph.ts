import { Queue } from '../Queue/Queue';

export class Graph {
  adjacencyList = new Map<Node, Node[]>();

  constructor(adjacencyList: Map<Node, Node[]>) {
    this.adjacencyList = adjacencyList;
  }

  public dfs(root: Node, visited: Node[] = []) {
    console.log(root.value);
    visited.push(root);

    this.adjacencyList.get(root)?.forEach(neighbour => {
        if (!visited.includes(neighbour)) this.dfs(neighbour, visited);
    });
  }

  public bfs(root: Node, queued: Node[] = []) {
    const queue = new Queue<Node>();

    queue.enqueue(root);
    queued.push(root);

    while(!queue.isEmpty()) {
      const element = queue.dequeue();
      console.log(element.value);
      this.adjacencyList.get(element)?.forEach(neighbour => {
        if (!queued.includes(neighbour)) {
          queue.enqueue(neighbour);
          queued.push(neighbour);
        }
      });
    }
  }
}

export class Node {
  public value: number;

  constructor(value: number) {
    this.value = value;
  }
}