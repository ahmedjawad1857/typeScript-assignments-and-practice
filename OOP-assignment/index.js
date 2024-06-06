"use strict";
// // Q1: Create a base class called Animal with properties name and sound. Then, create a derived class called Dog that extends Animal and has an additional property breed. Display the name, sound, and breed of the dog.
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        return `woof`;
    }
}
class Dog extends Animal {
    constructor(name, sound, breed) {
        super(name, sound);
        this.breed = breed;
    }
}
var new_dog = new Dog(`Tommy`, `bark`, `Bulldog`);
console.log(`dog name: ${new_dog.name} \ndog sound: ${new_dog.sound}\ndog breed: ${new_dog.breed}`);
// // Question 2: Overriding Methods
// // Extend the Dog class from the previous question. Add a method called makeSound to the Animal class that logs the sound of the animal. Override this method in the Dog class to log "Woof" as the sound.
class newdog extends Dog {
    constructor(name, sound, breed) {
        super(name, sound, breed);
        this.changeSound = sound;
    }
}
var new_dog1 = new newdog(`Tommy`, `bark`, `Bulldog`);
console.log(`dog name: ${new_dog.name} \ndog sound: ${new_dog.makeSound()}\ndog breed: ${new_dog.breed}`);
class manager {
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
}
var manager1 = new manager(`Ahmad`, 12345678, 100000);
console.log(manager1);
class student {
    constructor(firstname, lastname, name, id, salary) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    student_details() {
        console.log(`Student Firstname: ${studentemployee.firstname}\nStudent lastname: ${studentemployee.lastname}`);
    }
    employee_details() {
        console.log(`Employee Name: ${studentemployee.name}\nEmployee Id: ${studentemployee.id}\nEmployee Salary: ${studentemployee.salary} `);
    }
}
var studentemployee = new student(`Ahmad`, `Jawad`, `Ahmad`, 12345678, 100000);
studentemployee.student_details();
studentemployee.employee_details();
// // Question 7: Super Keyword
// // Create a base class Vehicle with properties make and model. Implement a derived class Car that extends Vehicle and adds a property color. Use the super keyword to call the base class constructor and set properties.
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
class car extends Vehicle {
    constructor(make, model, color) {
        super(make, model);
        this.color = color;
    }
}
var carVehicle = new car(`Honda`, ` Civic`, `Black`);
console.log(`Car company: ${carVehicle.make}\nCar model: ${carVehicle.model}\nCar colour: ${carVehicle.color}`);
// // Question 8: Access Modifiers
// // Create a class Person with properties name and age. Make name private and age protected. Implement a method to display the person's details.
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// // Question 9:
// // Create a base class Shape with a method draw. Implement two derived classes Circle and Square that override the draw method to display their respective shapes
// // This questions is not confirmed
class Shape {
    constructor() {
        this.draw = () => `Rectangle`;
    }
}
class Circle extends Shape {
    constructor() {
        super(...arguments);
        this.circle = () => `Circle`;
    }
}
class Square extends Shape {
    constructor() {
        super(...arguments);
        this.square = () => `Square`;
    }
}
var square1 = new Square();
console.log(square1.square());
var circle1 = new Circle();
console.log(circle1.circle());
// enum
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["green"] = 1] = "green";
    colors[colors["blue"] = 2] = "blue";
    colors[colors["white"] = 3] = "white";
})(colors || (colors = {}));
console.log(`Favourite color index = "${colors.white}"`);
console.log(`Favourite color name  = "${colors[colors.red]}"`);
