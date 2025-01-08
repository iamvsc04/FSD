const colors = ["red", "green", "blue", "yellow"];
let [a, b, ...rest] = colors;
let [, c, , d] = colors;

console.log(`First and Second elements of the Colors are : ${a} , ${b}`);
console.log(`Second and Fourth elements of the Colors are : ${c} , ${d}`);
