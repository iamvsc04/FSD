const product = {
  id: 101,
  name: "Laptop",
  price: 1000,
  category: "Electronics",
};
console.log(product);
function updateProductInfo(product, newdis, newstat) {
  return { ...product, discount: newdis, inStock: newstat };
}

console.log(updateProductInfo(product, 10, true));
