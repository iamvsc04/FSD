function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.study = function () {
    console.log(`${this.name} should study`);
  };
  this.getGrade = function () {
    console.log(`${this.name} is having a grade of ${this.grade}`);
  };
}

const Stu1 = new Student("VSC", 9.2);
Stu1.study();
Stu1.getGrade();
const Stu2 = new Student("Sai Charan", 9.51);
Stu2.study();
Stu2.getGrade();
const Stu3 = new Student("Charan", 8.25);
Stu3.study();
Stu3.getGrade();
