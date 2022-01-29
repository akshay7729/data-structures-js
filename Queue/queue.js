// create a queue data structute

// first in - first out

// like standing for ticket in a ticket counter

// unshift add
// pop remove

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove(record) {
    return this.data.pop(record);
  }

  peak() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Queue;
