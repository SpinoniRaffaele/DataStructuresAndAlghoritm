import { Graph, Node } from './Graph';

const testGraph = () => {
  const adjacencyList = new Map<Node, Node[]>();
  const root = new Node(1);
  const e2 = new Node(2);
  const e3 = new Node(3);
  const e4 = new Node(4);
  const e5 = new Node(5);
  const e6 = new Node(6);

  adjacencyList.set(root, [e2, e3]);
  adjacencyList.set(e3, [e4, e5]);
  adjacencyList.set(e2, [e5, e6]);
  adjacencyList.set(e4, [e6]);

  const graph = new Graph(adjacencyList);
  console.log("DEPTH");
  graph.dfs(root);
  console.log("BREADTH");
  graph.bfs(root);
};

testGraph();