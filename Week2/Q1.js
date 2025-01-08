function mergeArrays(arr) {
  let ans = [];
  for (let i in arr) {
    ans.push(...arr[i]);
  }
  console.log(ans);
}

mergeArrays([
  [1, 2],
  [3, 4],
  [5, 6],
]);
