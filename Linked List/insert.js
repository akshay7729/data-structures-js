class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  insert(index, data) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let current = this.head;
      if (index === 0) {
        newNode = this.head;
        newNode.next = current;
      } else {
        let currentNode = this.get(index);
        for (let i = 1; i <= index; i++) {
          current = current.next;
          if (i === index - 1) {
            current.next = newNode;
            newNode.next = currentNode;
          }
        }
      }
    }

    this.length++;
    return this;
  }
}

const list = new LinkedList();
list.push("0");
list.push("1");
list.push("2");
list.push("3");
list.push("4");

console.log(list.insert(2, "hello"));
