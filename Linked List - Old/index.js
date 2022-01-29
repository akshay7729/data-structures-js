class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const data = new Node(data, this.head);
  }
}

const list = new LinkedList();
list.head = new Node(10);
