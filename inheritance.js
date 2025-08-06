class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, I'm ${this.age}, and I'm in grade ${this.grade}.`);
  }
}

const person = new Person("John", 40);
person.introduce();

const student = new Student("Emma", 16, 10);
student.introduce();
