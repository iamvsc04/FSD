function customIterator(arr) {
  let cnt = arr.length - 1;
  return {
    next() {
      if (cnt > -1) {
        return {
          value: arr[cnt--],
          done: false,
        };
      } else {
        return {
          done: "Completed",
        };
      }
    },
  };
}
let arr = [1, 2, 3, 4, 5];
let itr = customIterator(arr);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
