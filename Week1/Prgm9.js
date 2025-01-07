function Rectangle(len, wid) {
  this.len = len;
  this.wid = wid;
  this.area = function () {
    return len * wid;
  };
}

const r1 = new Rectangle(10, 5);
console.log(`The Area of rectangle with width 5, height 10 is: ${r1.area()}`);
