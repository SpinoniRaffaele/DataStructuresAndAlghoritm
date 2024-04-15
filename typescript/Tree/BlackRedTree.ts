export class BlackRedTree {
  root: BRNode;

  public insert(value: number) {
    if (!this.root) {
      this.root = new BRNode(value, undefined, 'BLACK');
    } else {
      const newNode = this.unbalancedInsert(value, this.root, undefined);
      if (newNode?.parent?.parent) {
        this.balance(newNode);
      }
    }
  }

  public delete(value:number) {}

  public search(value: number): BRNode {
    return this.recursiveSearch(value, this.root);
  }

  public printTree(root, space = "") {
    if (root) {
      this.printTree(root.right, space + "    ");
      const color: string = root.color === 'BLACK' ? 'b' : 'r';
      console.log(space + root.value + color);
      this.printTree(root.left, space + "    ");
    }
  }

  private balance(newNode: BRNode) {
    const uncle = this.getUncle(newNode);
    const parent = newNode.parent;
    if (uncle?.color === 'RED' && parent.color === 'RED') {
      return this.propagateColorSwap(parent);
    }
    if (parent.color == 'RED') {
      const grandParent = parent.parent;
      if (parent.left === newNode && grandParent.left === parent) {
        this.llCase(parent, grandParent);
      }
      if (parent.right === newNode && grandParent.right === parent) {
        this.rrCase(parent, grandParent);
      }
      if (parent.left === newNode && grandParent.right === parent) {
        const newParent = this.rotateRight(parent);
        grandParent.right = newParent;
        newParent.parent = grandParent;
        this.rrCase(parent, grandParent);
      }
      if (parent.right === newNode && grandParent.left === parent) {
        const newParent = this.rotateLeft(parent);
        grandParent.left = newParent;
        newParent.parent = grandParent;
        this.llCase(parent, grandParent);
      }
    }
  }

  private llCase(parent: BRNode, grandParent: BRNode) {
    //right rotation of grandparent (and swap parent and grandparent colors)
    parent.color = 'BLACK';
    grandParent.color = 'RED';

    let grandParentPosition: undefined | 'left' | 'right' = undefined;
    const grandGrandParent = grandParent.parent;
    if (grandGrandParent) {
      grandParentPosition = grandGrandParent.left === grandParent ? 'left' : 'right';
    }
    const newGrandParent = this.rotateRight(grandParent);
    if (grandParentPosition) {
      grandGrandParent[grandParentPosition] = newGrandParent;
      newGrandParent.parent = grandGrandParent;
    }
  }

  private rrCase(parent: BRNode, grandParent: BRNode) {
    //right rotation of grandparent (and swap parent and grandparent colors)
    parent.color = 'BLACK';
    grandParent.color = 'RED';

    let grandParentPosition: undefined | 'left' | 'right' = undefined;
    const grandGrandParent = grandParent.parent;
    if (grandGrandParent) {
      grandParentPosition = grandGrandParent.left === grandParent ? 'left' : 'right';
    }
    const newGrandParent = this.rotateLeft(grandParent);
    if (grandParentPosition) {
      grandGrandParent[grandParentPosition] = newGrandParent;
      newGrandParent.parent = grandGrandParent;
    }
  }

  private propagateColorSwap(node: BRNode) {
    if (node === this.root) return;
    node.color = 'BLACK';
    const sibling = node.parent.left === node ? node.parent.right : node.parent.left;
    sibling.color = 'BLACK';
    if (node.parent !== this.root) {
      node.parent.color = 'RED';
      this.propagateColorSwap(node.parent.parent);
    }
  }

  private getUncle(node: BRNode) {
    const parent = node.parent;
    const grandParent = node.parent.parent;
    return parent === grandParent.left ? grandParent.right : grandParent.left;
  }

  private unbalancedInsert(value: number, node: BRNode, parent: BRNode): BRNode {
    if (node === undefined) {
      const newNode = new BRNode(value, parent, 'RED');
      parent.value > value ? parent.left = newNode : parent.right = newNode;
      return newNode;
    }
    if (value > node.value) return this.unbalancedInsert(value, node.right, node);
    if (value < node.value) return this.unbalancedInsert(value, node.left, node);
  }

  private recursiveSearch(value: number, node: BRNode): BRNode {
    if (node === undefined) return undefined;
    if (node.value === value) return node;
    if (value > node.value) return this.recursiveSearch(value, node.right);
    if (value < node.value) return this.recursiveSearch(value, node.left);
  }

  private rotateLeft(node: BRNode): BRNode {
    const newSubRoot = node.right;
    const movingLeaf = node.right.left;

    newSubRoot.left = node;
    node.parent = newSubRoot;

    node.right = movingLeaf;
    if (movingLeaf) movingLeaf.parent = node;
    return newSubRoot;
  }

  private rotateRight(node: BRNode): BRNode {
    const newSubRoot = node.left;
    const movingLeaf = node.left.right;

    newSubRoot.right = node;
    node.parent = newSubRoot;

    node.left = movingLeaf;
    if (movingLeaf) movingLeaf.parent = node;
    return newSubRoot;
  }
}

export class BRNode {
  color: 'BLACK' | 'RED';
  left?: BRNode;
  right?: BRNode;
  parent?: BRNode;
  value: number;

  constructor(value: number, parent: BRNode | undefined, color: 'BLACK' | 'RED') {
    this.value = value;
    this.parent = parent;
    this.color = color;
  }
}