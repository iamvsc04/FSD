function higherOrder(func, a, b) {
  return func(a, b);
}

function sum(a, b) {
  return a + b;
}

const num1 = 20;
const num2 = 50;

const result = higherOrder(sum, num1, num2);
console.log(result);
