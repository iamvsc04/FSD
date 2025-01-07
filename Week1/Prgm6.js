function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.describe = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
};
function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}
Student.prototype.study = function () {
  console.log(`${this.name} is studying for grade ${this.grade}`);
};

const per = new Person("John", 30);
per.describe();

const stu = new Student("John", 30, "A");
stu.study();
