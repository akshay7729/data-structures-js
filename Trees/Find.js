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

  find(data) {
    if (!this.root) {
      return false;
    } else if (data === this.root.data) {
      return this.root.data;
    } else {
      let current = this.root;
      while (current) {
        if (data < current.data) {
          current = current.left;
        } else if (data > current.data) {
          current = current.right;
        } else {
          return current;
        }
      }
      return "not found";
    }
  }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
console.log("find 1", tree.find(7));
console.log("find 2", tree.find(17));
console.log("find 3", tree.find(15));
