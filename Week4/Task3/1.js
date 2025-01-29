// working with higher order functions

function higherOrder(func, a, b) {
  func(a, b);
}

function sum(a, b) {
  console.log(a + b);
}

const num1 = 20;
const num2 = 50;
higherOrder(sum, num1, num2);
