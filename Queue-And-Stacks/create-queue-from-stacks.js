const stack = require("../Stacks/stack");

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  // move every record to stack B
  remove() {
    while (this.first.peek()) {
      const tempRecord = this.first.pop();
      this.second.push(tempRecord);
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      const tempRecord2 = this.second.pop();
      this.first.push(this.second.pop());
    }

    return record;
  }
}
