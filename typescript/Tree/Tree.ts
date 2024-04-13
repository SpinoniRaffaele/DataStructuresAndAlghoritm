export class BinaryTree {
  value?: string;
  left?: BinaryTree = undefined;
  right?: BinaryTree = undefined;

  public inOrderTraversal(node?: BinaryTree): void {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  public preOrderTraversal(node?: BinaryTree): void {
    if (node) {
      console.log(node.value);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  public postOrderTraversal(node?: BinaryTree): void {
    if (node) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.value);
    }
  }
}