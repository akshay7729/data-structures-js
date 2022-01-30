class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      current = this.first;
      this.first = newNode;
      this.first.next = current;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) {
      return undefined;
    }

    let current = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return current.data;
  }
}
