// // Q1: Create a base class called Animal with properties name and sound. Then, create a derived class called Dog that extends Animal and has an additional property breed. Display the name, sound, and breed of the dog.
class Animal {
  name: string;
  sound: string;
  constructor(name: string, sound: string) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    return `woof`;
  }
}
class Dog extends Animal {
  breed: string;
  constructor(name: string, sound: string, breed: string) {
    super(name, sound);
    this.breed = breed;
  }
}
var new_dog = new Dog(`Tommy`, `bark`, `Bulldog`);
console.log(
  `dog name: ${new_dog.name} \ndog sound: ${new_dog.sound}\ndog breed: ${new_dog.breed}`
);
// // Question 2: Overriding Methods
// // Extend the Dog class from the previous question. Add a method called makeSound to the Animal class that logs the sound of the animal. Override this method in the Dog class to log "Woof" as the sound.
class newdog extends Dog {
  changeSound: any;
  constructor(name: string, sound: string, breed: string) {
    super(name, sound, breed);
    this.changeSound = sound;
  }
}
var new_dog1 = new newdog(`Tommy`, `bark`, `Bulldog`);
console.log(
  `dog name: ${new_dog.name} \ndog sound: ${new_dog.makeSound()}\ndog breed: ${
    new_dog.breed
  }`
);
// // Question 4: Interfaces

// // Create an interface Employee with properties name, id, and salary. Implement a class called Manager that implements the Employee interface and sets the properties accordingly.
interface Employee {
  name: string;
  id: number;
  salary: number;
}
class manager implements Employee {
  constructor(name: string, id: number, salary: number) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }
  name: string;
  id: number;
  salary: number;
}
var manager1 = new manager(`Ahmad`, 12345678, 100000);
console.log(manager1);
// // Question 5: Interface Inheritance

// // Extend the Employee interface from the previous question to include a method getDetails. Implement this method in the Manager class to display the details of the manager.
interface newemployee extends Employee {
  getDetails: () => void;
}

// // Question 6: Multiple Inheritance

// // Create an interface called Person with properties firstName and lastName. Implement a class Student that implements both Person and Employee interfaces from previous questions. Display the student's and employee's details.
interface Person {
  firstname: string;
  lastname: string;
}
class student implements Person, Employee {
  firstname: string;
  lastname: string;
  name: string;
  id: number;
  salary: number;
  static firstname: any;
  static lastname: any;
  static id: any;
  static salary: any;
  constructor(
    firstname: string,
    lastname: string,
    name: string,
    id: number,
    salary: number
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.name = name;
    this.id = id;
    this.salary = salary;
  }
  student_details() {
    console.log(
      `Student Firstname: ${studentemployee.firstname}\nStudent lastname: ${studentemployee.lastname}`
    );
  }
  employee_details() {
    console.log(
      `Employee Name: ${studentemployee.name}\nEmployee Id: ${studentemployee.id}\nEmployee Salary: ${studentemployee.salary} `
    );
  }
}
var studentemployee = new student(`Ahmad`, `Jawad`, `Ahmad`, 12345678, 100000);
studentemployee.student_details();
studentemployee.employee_details();
// // Question 7: Super Keyword

// // Create a base class Vehicle with properties make and model. Implement a derived class Car that extends Vehicle and adds a property color. Use the super keyword to call the base class constructor and set properties.
class Vehicle {
  make: string;
  model: string;
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}
class car extends Vehicle {
  color: string;
  constructor(make: string, model: string, color: string) {
    super(make, model);
    this.color = color;
  }
}
var carVehicle = new car(`Honda`, ` Civic`, `Black`);
console.log(
  `Car company: ${carVehicle.make}\nCar model: ${carVehicle.model}\nCar colour: ${carVehicle.color}`
);
// // Question 8: Access Modifiers

// // Create a class Person with properties name and age. Make name private and age protected. Implement a method to display the person's details.
class person {
  private name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// // Question 9:

// // Create a base class Shape with a method draw. Implement two derived classes Circle and Square that override the draw method to display their respective shapes
// // This questions is not confirmed
class Shape {
  draw = (): string => `Rectangle`;
}

class Circle extends Shape {
  circle = (): string => `Circle`;
}
class Square extends Shape {
  square = (): string => `Square`;
}
var square1 = new Square();
console.log(square1.square());
var circle1 = new Circle();
console.log(circle1.circle());
// enum
enum colors {
  red,
  green,
  blue,
  white,
}
console.log(`Favourite color index = "${colors.white}"`);
console.log(`Favourite color name  = "${colors[colors.red]}"`);
