function customIterator(max) {
  let cnt = 1;
  return {
    next() {
      if (cnt < max) {
        return {
          value: cnt++,
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

let itr = customIterator(5);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
