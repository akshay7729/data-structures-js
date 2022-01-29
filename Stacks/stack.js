class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop(record) {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
