const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
let [lastdigit, ...rest] = numbers;
numbers.reverse();
console.log(lastdigit);
