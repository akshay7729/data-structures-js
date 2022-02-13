class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;
d.next = null;

// noramal
const printLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

const printLinkedListRecursion = (head) => {
  if (head === null) {
    return;
  }
  console.log(head.val);
  printLinkedListRecursion(head.next);
};

printLinkedList(a);
printLinkedListRecursion(a);
