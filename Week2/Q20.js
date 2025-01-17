function customIterator(nums) {
  let cnt = 0;
  return {
    next() {
      if (cnt < nums.length) {
        return {
          value: cnt++,
          done: false,
        };
      } else {
        cnt = 0;
        return {
          done: true,
        };
      }
    },
    reset() {
      cnt = 1;
    },
  };
}
let list = [1, 2, 3, 4, 5];
let itr = customIterator(list);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
