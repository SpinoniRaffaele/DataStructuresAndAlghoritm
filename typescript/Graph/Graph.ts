import { Queue } from '../Queue/Queue';

export class Graph<T> {
  adjacencyList = new Map<Node<T>, Node<T>[]>();

  constructor(adjacencyList: Map<Node<T>, Node<T>[]>) {
    this.adjacencyList = adjacencyList;
  }

  public dfs(root: Node<T>, visited: Node<T>[] = []) {
    console.log(root.value);
    visited.push(root);

    this.adjacencyList.get(root)?.forEach(neighbour => {
        if (!visited.includes(neighbour)) this.dfs(neighbour, visited);
    });
  }

  public dfsIterative(root: Node<T>) {
    const stacked = [];
    const stack = [];
    stack.push(root);
    stacked.push(root);

    while(stack.length > 0) {
      const elem = stack.pop();
      console.log(elem.value);
      this.adjacencyList.get(elem)?.forEach(neighbour => {
        if(!stacked.includes(neighbour)) {
          stack.push(neighbour);
          stacked.push(neighbour);
        }
      });
    }
  }

  public bfs(root: Node<T>, queued: Node<T>[] = []) {
    const queue = new Queue<Node<T>>();

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

  //this suppose undirected graph
  public bidirectionalSearch(node1: Node<T>, node2: Node<T>): T[] {
    const queue1 = new Queue<Node<T>>();
    const queued1: Node<T>[] = [];
    const queue2 = new Queue<Node<T>>();
    const queued2: Node<T>[] = [];
    const path1 = [];
    const path2 = [];

    queue1.enqueue(node1);
    queued1.push(node1);
    queue2.enqueue(node2);
    queued2.push(node2);
    let intersectedElem = undefined;

    while(!intersectedElem && !(queue1.isEmpty() && queue2.isEmpty())) {
      let element1, element2;
      if (!queue1.isEmpty()) {
        element1 = queue1.dequeue();
        path1.push(element1.value);
      }

      if (!queue2.isEmpty()) {
        element2 = queue2.dequeue();
        path2.push(element2.value);
      }
      intersectedElem = path1.filter(elem => path2.includes(elem))[0];

      if (intersectedElem) {
        const indexOfIntersection1 = path1.indexOf(intersectedElem);
        const indexOfIntersection2 = path2.indexOf(intersectedElem);
        const result = [];
        for(let i = 0; i <= indexOfIntersection1; i++) {
          result.push(path1[i]);
        }
        for(let i = indexOfIntersection2 - 1; i >= 0; i--) {
          result.push(path2[i]);
        }
        return result;
      } else {
        if (element1) {
          this.adjacencyList.get(element1)?.forEach(neighbour => {
            if (!queued1.includes(neighbour)) {
              queue1.enqueue(neighbour);
              queued1.push(neighbour);
            }
          });
        }
        if (element2) {
          this.adjacencyList.get(element2)?.forEach(neighbour => {
            if (!queued2.includes(neighbour)) {
              queue2.enqueue(neighbour);
              queued2.push(neighbour);
            }
          });
        }
      }
    }
    return [];
  }
}

export class Node<T> {
  public value: T;

  constructor(value: T) {
    this.value = value;
  }
}