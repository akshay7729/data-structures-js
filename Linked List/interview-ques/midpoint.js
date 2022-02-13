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
const e = new Node("E");
const f = new Node("F");
const g = new Node("G");
const h = new Node("H");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = null;

const midPoint = (head) => {
  let slow = head;
  let fast = head;
  while (slow !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === null) {
      return slow;
    }
  }
};

console.log(midPoint(a));
