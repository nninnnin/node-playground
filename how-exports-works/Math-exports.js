exports = class Square {
  constructor(width) {
    this.width = width;
  }

  area() {
    return this.width ** 2;
  }
};

console.log("exports >>>", exports); // [class Square]
console.log("module.exports >>>", module.exports); // {}
console.log("compare", exports === module.exports); // false
