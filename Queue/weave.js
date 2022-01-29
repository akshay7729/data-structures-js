const Queue = require("./queue");

const weave = (src1, src2) => {
  const q = new Queue();

  while (src1.peek() || src2.peek()) {
    if (src1.peek()) {
      q.add(src1.remove());
    }

    if (src2.peek()) {
      q.add(src2.remove());
    }
  }

  return q;
};

module.exports = weave;
