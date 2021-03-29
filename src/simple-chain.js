const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],

  getLength() {
    return this.array.length;
  },

  addLink(value) {
    this.array.push(String(value));
    return this;
  },

  removeLink(pos) {
    if (typeof pos != "number" || pos % 1 != 0 || (pos > 0 && pos <= this.array.length)) {
      this.array.splice(pos - 1, 1);
      return this;
    }
    this.array = [];
    throw new Error('Error');
  },

  reverseChain() {
    this.array.reverse();
    return this;
  },

  finishChain() {
    let str = `( ${this.array.join(" )~~( ")} )`;
    this.array = [];
    return str;
  },
};

module.exports = chainMaker;
