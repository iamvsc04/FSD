function* cumulativeSum(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
    yield sum;
  }
  return sum;
}
const arr = [1, 2, 3, 4, 5];
const gen = cumulativeSum(arr);
let i = arr.length;
while (i-- > 0) {
  console.log(gen.next().value);
}
console.log("Final sum is :", gen.next().value);
