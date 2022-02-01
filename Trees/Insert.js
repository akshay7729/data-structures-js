class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.length = 0;
  }
  insert(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      if ((data = current.data)) {
        return undefined;
      }
      for (let i = 0; i < this.length; i++) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = new Node(data);
            return this;
          } else {
            current = current.left;
          }
        } else if (data > current.data) {
          if (current.right === null) {
            current.right = new Node(data);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
    this.length++;
    return this;
  }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
console.log(tree);
