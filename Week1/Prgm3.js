let Person = {
  name: "Sai Charan",
  age: 16,
  greet() {
    console.log(`Hello,I am ${this.name}`);
  },
};

Person.isAdult = function () {
  if (this.age >= 18) console.log(`Yes ${Person.name} is Adult `);
  else console.log(`No ${Person.name}, is not an Adult `);
};

Person.isAdult();
Person.greet();
