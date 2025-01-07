class Animal {
  speak() {
    console.log("I am an Animal");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!!!!");
  }
}

const a1 = new Animal();
a1.speak();

const dog1 = new Dog();
dog1.speak();
