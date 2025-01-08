const symbol1 = Symbol("uniqueSymbol");
const symbol2 = Symbol("uniqueSymbol");
const myObject = {
  [symbol1]: "This is the first unique symbol property",
  [symbol2]: "This is the second unique symbol property",
};
console.log(myObject[symbol1]);
console.log(myObject[symbol2]);
console.log(symbol1 === symbol2);
