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
  }

  insert(data) {
    // if root is absent
    if (!this.root) {
      this.root = new Node(data);
      return;
    } else {
      let current = this.root;
      while (true) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = new Node(data);
            return;
          } else {
            current = current.left;
          }
        } else if (data > current.data) {
          if (current.right === null) {
            current.right = new Node(data);
            return;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(7);
tree.root.right = new Node(20);
tree.root.right.left = new Node(15);
tree.insert(12);
tree.insert(2);
tree.insert(8);

console.log(tree);
