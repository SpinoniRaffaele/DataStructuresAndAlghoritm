import { BinaryTree } from './Tree';

const testTree = () => {
  const tree = new BinaryTree();
  tree.value = "root";
  tree.left = new BinaryTree();
  tree.left.value = "left";
  tree.right = new BinaryTree();
  tree.right.value = "right";

  tree.inOrderTraversal(tree);
  tree.preOrderTraversal(tree);
  tree.postOrderTraversal(tree);
};

testTree();