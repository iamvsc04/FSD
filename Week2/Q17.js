const sym1 = Symbol.for("uniqueSymbol");
const sym2 = Symbol.for("uniqueSymbol");
const sym3 = Symbol("uniqueSymbol");
const sym4 = Symbol("uniqueSymbol");
console.log(sym1 === sym2);
console.log(sym3 === sym4);
