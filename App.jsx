import React from "react";

// Base Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student subclass
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  displayInfo() {
    return `${super.displayInfo()}, Course: ${this.course}`;
  }
}

// Teacher subclass
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  displayInfo() {
    return `${super.displayInfo()}, Subject: ${this.subject}`;
  }
}

function App() {
  const student1 = new Student("Alice", 20, "Computer Science");
  const teacher1 = new Teacher("Mr. Smith", 40, "Mathematics");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Person Class Hierarchy</h1>
      <p>{student1.displayInfo()}</p>
      <p>{teacher1.displayInfo()}</p>
    </div>
  );
}

export default App;
