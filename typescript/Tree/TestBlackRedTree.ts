import { BlackRedTree } from './BlackRedTree';

const testBlackRedTree = () => {
  const tree = new BlackRedTree();

  tree.insert(10);
  tree.insert(8);
  tree.insert(100);
  tree.insert(7);
  tree.insert(6);
  tree.insert(5);
  tree.insert(110);
  tree.insert(120);
  tree.insert(105);

  tree.printTree(tree.root);
  console.log(tree.search(100).value);
  console.log(tree.search(101));
};

testBlackRedTree();