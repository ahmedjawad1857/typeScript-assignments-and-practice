// // // Question 1: Array Manipulation and Function Interaction

// // // You are given an array of student objects, where each object has properties name (string) and grades (array of numbers):

// // // const students = [
// // //   { name: "Alice", grades: [95, 88, 92] },
// // //   { name: "Bob", grades: [78, 86, 90] },
// // //   { name: "Charlie", grades: [89, 94, 87] }
// // // ];
// // // Write a function named calculateAverageGrades that takes the array of students as a parameter and returns an array of objects with the format { name: string, averageGrade: number } that includes the student name and their average grade.
// interface student {
//   name: string;
//   grades: number[] | number;
// }
// const students = [
//   { name: "Alice", grades: [95, 88, 92] },
//   { name: "Bob", grades: [78, 86, 90] },
//   { name: "Charlie", grades: [89, 94, 87] },
// ];
// var calculateAverageGrades = (total: number) => {
//   var averageGrades = [];

//   for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     var sum = student.grades.reduce((sum, grade) => sum + grade, 0);
//     var average = Math.floor((sum / total) * 100);

//     averageGrades.push({
//       name: student.name,
//       grades: average,
//     });
//   }
//   return averageGrades;
// };

// var averageGrades = calculateAverageGrades(300);
// console.log(averageGrades);
// // // Question 2: Looping, Array Filtering, and Math Operations

// // // You are given an array of numbers:

// // // const numbers = [5, 10, 15, 20, 25, 30];
// // // Write a function named calculateSumOfEvenSquaredNumbers that takes an array of numbers as a parameter, filters the even numbers, calculates the square of each even number, and returns the sum of the squared even numbers.
// const numbers: number[] = [5, 10, 15, 20, 25, 30];
// var calculateSumOfEvenSquaredNumbers = () => {
//   var b = numbers.filter((index) => index % 2 == 0);
//   var Bob = b.map((index) => index * index);
//   var bob1 = Bob.reduce((sum1, sum2) => sum1 + sum2);

//   return bob1;
// };
// console.log(calculateSumOfEvenSquaredNumbers());
// // // Question 3: Class Inheritance and Method Overrides

// // // Define a class named Animal with properties name and sound. Create two subclasses, Cat and Dog, that inherit from Animal. Override the sound property for each subclass. Write a function named makeNoise that takes an array of Animal objects and makes each animal in the array produce its sound.

// class Animal {
//   name: string;
//   sound: string;

//   constructor(name: string, sound: string) {
//     this.name = name;
//     this.sound = sound;
//   }
// }

// class Cat extends Animal {
//   constructor(name: string) {
//     super(name, "Meow");
//   }
// }

// class Dog extends Animal {
//   constructor(name: string) {
//     super(name, "Woof");
//   }
// }

// function makeNoise(animals: Animal[]) {
//   animals.forEach((index) => {
//     console.log(`${index.name} says ${index.sound}`);
//   });
// }

// var cat1 = new Cat("tom");
// var dog1 = new Dog("Ben");

// var animals: Animal[] = [cat1, dog1];

// makeNoise(animals);
// // Question 4: Interface and Union Types

// // Define an interface named Shape with a method calculateArea. Implement two classes, Circle and Rectangle, both implementing the Shape interface. Create an array of Shape objects containing both circles and rectangles. Write a function named displayTotalArea that calculates and displays the total area of all shapes in the array.
interface Shape {
  calculateArea(): void;
}
class Circle implements Shape {
  calculateArea() {
    var blue: number = Math.PI * 40 * 40;
    return blue.toPrecision(5);
  }
}

class Rectangle implements Shape {
  calculateArea(): number {
    return 50 * 40;
  }
  // 251.2
}
var displayTotalArea = (new_array: Shape[]) => {
  new_array.forEach((index) => {
    console.log(index.calculateArea());
  });
};
var circle = new Circle();

var rectangles = new Rectangle();
var new_array = [circle, rectangles];

displayTotalArea(new_array);
// // Question 5: String Manipulation and Decision Making

// // You are given an array of strings:

// // const words = ["apple", "banana", "cherry", "date", "fig"];
// // Write a function named countVowels that takes an array of strings as a parameter, counts the total number of vowels across all strings, and returns the count.
const words1: string[] = ["Apple", "banana", "cherry", "date", "fig", `hello`];
var countVowels1: number = 0;
var countVowels = () => {
  for (let i = 0; i < words1.length; i++) {
    for (let j = 0; j < words1.length; j++) {
      if (
        words1[i].charAt(j) === `A` ||
        words1[i].charAt(j) === `E` ||
        words1[i].charAt(i) === `I` ||
        words1[i].charAt(j) === `O` ||
        words1[i].charAt(j) === `U` ||
        words1[i].charAt(j) === `a` ||
        words1[i].charAt(j) === `e` ||
        words1[i].charAt(j) === `i` ||
        words1[i].charAt(j) === `o` ||
        words1[i].charAt(j) === `u`
      ) {
        countVowels1++;
      }
    }
  }
  return countVowels1;
};

console.log(`vowels count:${countVowels()}`);
// // // Question 6: Function Composition and Object Manipulation

// // // You are given an array of product objects, where each object has properties name (string) and price (number):

// // //const products = [
// // //   { name: "Widget", price: 10 },
// // //   { name: "Gadget", price: 25 },
// // //  { name: "Thingamabob", price: 15 }
// // // ];
// // //
// // Write a function named calculateTotalWithTax that takes the array of products as a parameter, calculates the total price including a 10% tax for each product, and returns the overall total.
// interface Products {
//   name: string;
//   price: number;
// }
// type products1 = [Products, Products, Products];
// const products: products1 = [
//   { name: "Widget", price: 10 },
//   { name: "Gadget", price: 25 },
//   { name: "Thingamabob", price: 15 },
// ];
// var calculateTotalWithTax = () => {
//   var totalproduct = products.map(
//     (index) => index.price + (index.price / 100) * 10
//   );
//   var includingtax = totalproduct.reduce((sum1, sum2) => sum1 + sum2);
//   return includingtax;
// };
// console.log(calculateTotalWithTax());
// // //Question 7: Looping and Object Properties

// // // You are given a complex object:

// // // const data = {
// // //  person: {
// // //    name: "Alice",
// // //   age: 30,
// // //    address: {
// // //      street: "123 Main St",
// // //      city: "Wonderland"
// // //    }
// // //  }
// // // };
// // // Write a function named displayAddress that takes the data object as a parameter and prints the person's name and complete address.
// interface data1 {
//   person: {
//     name: string;
//     age: 30;
//     adress: {
//       street: string;
//       city: string;
//     };
//   };
// }

// const data = {
//   person: {
//     name: "Alice",
//     age: 30,
//     address: {
//       street: "123 Main St",
//       city: "Wonderland",
//     },
//   },
// };
// var displayAddress = (): void => {
//   console.log(
//     `Person Name: ${data.person.name} \n Person Full Address: ${
//       data.person.address.street + `` + data.person.address.city
//     }`
//   );
// };
// displayAddress();
// // // Question 8: Nested Array and Object Operations

// // // You are given a nested array of numbers:

// // // const nestedNumbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// // // Write a function named calculateSumOfNestedNumbers that takes the nested array as a parameter, calculates the sum of all numbers, and returns the total sum.
// const nestedNumbers: [number[], number[], number[]] = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// var c = nestedNumbers[0].reduce((sum1, sum2) => sum1 + sum2);
// var d = nestedNumbers[1].reduce((sum1, sum2) => sum1 + sum2);
// var e = nestedNumbers[2].reduce((sum1, sum2) => sum1 + sum2);
// var sum = c + d + e;
// console.log(sum);
// // // Question 9: TypeScript Arrays and Method Usage

// // // You are given an array of numbers:

// // // const scores = [90, 85, 95, 70, 84];
// // // a. Write a function named calculateAverageScore that takes the array as a parameter and returns the average score.
const scores: number[] = [90, 98, 85, 95, 70, 84];
// var calculateAverageScore = (total: number) => {
//   var totalscore = scores.reduce((sum1, sum2) => sum1 + sum2);
//   var AverageScore = Math.floor((totalscore / total) * 100);
//   return AverageScore;
// };
// console.log(calculateAverageScore(500));
// // // b. Write a function named findHighestScore that takes the array as a parameter and returns the highest score.
var findHighestScore = () => {
  let HighestScore: number | string = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > HighestScore) {
      HighestScore = scores[i];
    }
  }

  return HighestScore;
};

const HighestScore = findHighestScore();

console.log(`The highest score is: ${HighestScore}`);

// // // Question 10: Objects and String Manipulation

// // // You are given an array of person objects, where each object has properties firstName and lastName:

// // // const people = [
// // // { firstName: "Alice", lastName: "Smith" },
// // // { firstName: "Bob", lastName: "Johnson" },
// // // { firstName: "Charlie", lastName: "Williams" }
// // // ];
// // // Write a function named createFullName that takes the array as a parameter and returns an array of full names (e.g., "Alice Smith").
// interface person {
//   firstname: string;
//   lastname: string;
// }
// type person1 = [person, person, person];
// const people: person1 = [
//   { firstname: "Alice", lastname: "Smith" },
//   { firstname: "Bob", lastname: "Johnson" },
//   { firstname: "Charlie", lastname: "Williams" },
// ];
// var createFullName = () => {
//   for (let i = 0; i < people.length; i++) {
//     const element = people[i];
//     console.log(`${element.firstname}  ${element.lastname}`);
//   }
// };
// createFullName();
// // // Question 11: Functions and Object Creation

// // // Write a function named createEmployee that takes firstName and lastName as parameters and returns an employee object with properties fullName and email. The email should be generated by combining the first and last name (e.g., "alice.smith@example.com").
// type employee = [
//   {
//     fullname: string;
//     email: string;
//   }
// ];
// var employee1: any = [];
// var createEmployee = (firstname: string, lastname: string): employee => {
//   var fullName = `${firstname}  ${lastname}`;
//   var email1 = `${firstname}.${lastname}@example.com`;
//   employee1.push({ fullname: fullName, email: email1 });
//   return employee1;
// };
// console.log(createEmployee(`Ahmad`, `Jawad`));
// // // Question 12: TypeScript Arrays and String Manipulation

// // // You are given an array of words:

// // // const words = ["apple", "banana", "cherry", "date", "fig"];
// // // a. Write a function named capitalizeWords that takes the array as a parameter and returns an array with all words capitalized.
// const words = ["apple", "banana", "cherry", "date", "fig"];
// var capital: string[] = [];
// var capitalizeWords = () => {
//   for (let i = 0; i < words.length; i++) {
//     const element = words[i];
//     var capital1 = words[i].toUpperCase();
//     capital.push(capital1);
//   }
//   return capital;
// };
// console.log(capitalizeWords());

// // // b. Write a function named concatenateAndUppercase that takes the array as a parameter, concatenates all words, and returns the result in uppercase.
// var concatenateAndUppercase = () => {
//   var concat = words.reduce((sum1, sum2) => sum1 + sum2);
//   var uppercase = concat.toUpperCase();
//   return uppercase;
// };
// console.log(concatenateAndUppercase());

// // Question 13: Class Inheritance and Interface Implementation

// // Define an interface named Vehicle with a method startEngine. Implement two classes, Car and Motorcycle, both implementing the Vehicle interface. Create an array of Vehicle objects containing both cars and motorcycles. Write a function named startAllEngines that calls the startEngine method for each vehicle in the array.
interface Vehicle {
  startengine(): string;
}
class Car implements Vehicle {
  startengine(): string {
    return `Car engine started`;
  }
}
class motorcycles implements Vehicle {
  startengine(): string {
    return `Motorcycle engine started`;
  }
}
var startAllEngines = (motorcar: Vehicle[]) => {
  motorcar.forEach((index) => {
    console.log(`${index.startengine()}`);
  });
};
var motorcycle = new motorcycles();
var car = new Car();
var motorcar = [motorcycle, car];
startAllEngines(motorcar);

// // // Question 14: TypeScript Arrays and Object Manipulation

// // // You are given an array of student objects, where each object has properties name (string) and grades (array of numbers):

// // // const students = [
// // // { name: "Alice", grades: [95, 88, 92] },
// // // { name: "Bob", grades: [78, 86, 90] },
// // // { name: "Charlie", grades: [89, 94, 87] }
// // // ];
// // // a. Write a function named calculateTotalGrades that takes the array of students as a parameter and returns an array of objects with the format { name: string, totalGrade: number } that includes the student name and their total grade.

// var calculateAverageGrades = (total: number) => {
//   var averageGrades = [];

//   for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     var sum = student.grades.reduce((sum, grade) => sum + grade, 0);
//     var average = (sum / total) * 100;

//     averageGrades.push({
//       name: student.name,
//       grades: average,
//     });
//   }
//   return averageGrades;
// };

// var averageGrades = calculateAverageGrades(300);
// console.log(averageGrades);
// // // b. Write a function named findTopStudent that takes the array of students as a parameter and returns the student with the highest total grade.
// // var findTopStudent = () => {

// //   for (let i = 0; i < students.length; i++) {

// //     const element = students[i];
// //     for (let j = i + 2; j < students.length; j++) {
// //       const element = students[j];
// //       var sum=students[i].grades.reduce((sum1,sum2)=>sum1+sum2)
// //             var average = (sum / 300) * 100;
// //     students[i].grades=Math.floor(average)
// //       if (j > i) {
// //         console.log(students[i]);
// //       }
// //     }
// //     break;
// //   }
// // };
// // findTopStudent();
// // // Question 15: Looping and Decision Making

// // // You are given an array of numbers:

// // // const values = [10, 25, 30, 15, 5];
// // // Write a function named countAboveThreshold that takes the array and a threshold number as parameters, and returns the count of numbers in the array that are above the threshold.
// // with loop
var prompt1: any = prompt(
  `Enter a number to see above elemnts in array fromyour number`
);
const values: number[] = [10, 25, 30, 15, 5];
var Abovethreshold: number[] = [];
var countAboveThreshold = (threshold: number): number[] => {
  for (let i = 0; i < values.length; i++) {
    const element = values[i];
    if (element > threshold) {
      Abovethreshold.push(element);
    }
  }
  return Abovethreshold;
};
console.log(
  `Numbers greater than threshold:  ${countAboveThreshold(prompt1 )} with loop `
);
// // with filter method
var countAboveThreshold2 = (threshold: number): number[] =>
  values.filter((index) => index > threshold);

console.log(
  `Numbers greater than threshold: ${countAboveThreshold2(
    prompt1
  )} with filter method`
);

// // // Question 16: Objects and Function Interaction

// // // You are given an array of book objects, where each object has properties title (string) and pages (number):

// // // const books = [
// // // { title: "Book 1", pages: 150 },
// // // { title: "Book 2", pages: 220 },
// // // { title: "Book 3", pages: 180 }
// // // ];
// // // Write a function named calculateTotalPages that takes the array as a parameter and returns the total number of pages for all books combined.
// interface book {
//   title: string;
//   pages: number;
// }
// type book1 = [book, book, book];
// const books: book1 = [
//   { title: "Book 1", pages: 150 },
//   { title: "Book 2", pages: 220 },
//   { title: "Book 3", pages: 180 },
// ];
// var totalpages: number[] = [];
// var totalpages1: number | number[] = 0;
// var calculateTotalPages = () => {
//   for (let i = 0; i < books.length; i++) {
//     totalpages1 = totalpages.push(books[i].pages);
//   }
//   console.log(
//     `Total pages of books: ${totalpages.reduce(
//       (sum1, sum2) => sum1 + sum2
//     )} pages`
//   );
// };
// calculateTotalPages();
// // // Question 17: TypeScript Arrays and Decision Making

// // // You are given an array of student objects, where each object has properties name (string) and age (number):
// // // const students = [
// // // { name: "Alice", age: 20 },
// // // { name: "Bob", age: 18 },
// // // { name: "Charlie", age: 22 }
// // // ];
// // // a. Write a function named findAverageAge that takes the array as a parameter and returns the average age of the students.
interface studenttype {
  name: string;
  age: number;
}
type studenttype1 = [studenttype, studenttype, studenttype];
const students1: studenttype1 = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 18 },
  { name: "Charlie", age: 22 },
];
var totalage: number[] = [];
var totalage1: number = 0;
var findAverageAge = () => {
  for (let i = 0; i < students1.length; i++) {
    totalage1 = totalage.push(students1[i].age);
  }

  var f = totalage.reduce((sum1, sum2) => sum1 + sum2) / students1.length;
  return f;
};
console.log(`Average ages of students: ${findAverageAge()}`);

// // // b. Write a function named findOldestStudent that takes the array as a parameter and returns the student with the highest age.

function findOldestStudent(students: any): studenttype | null {
  let oldestStudent: any | null = students[0];

  for (let i = 1; i < students.length; i++) {
    if (students1[i].age > oldestStudent.age) {
      oldestStudent = students[i];
    }
  }

  return oldestStudent;
}

const oldestStudent = findOldestStudent(students1);

console.log(
  `The oldest student is ${oldestStudent?.name} who is ${oldestStudent?.age} years old.`
);

// // // Question 18: Nested Objects and Object Properties

// // // You are given a complex object representing a shopping cart:

// // // const shoppingCart = {
// // // customer: {
// // // name: "Alice",
// // //  email: "alice@example.com"
// // // },
// // // items: [
// // //  { product: "Widget", price: 10 },
// // //  { product: "Gadget", price: 25 },
// // //  { product: "Thingamabob", price: 15 }
// // // ]
// // // };
// // // Write a function named calculateTotalPrice that takes the shopping cart object as a parameter and calculates the total price of all items.
// type Products1 = {
//   customer: {
//     name: string;
//     email: string;
//   };
//   items: [
//     { product: string; price: number },
//     { product: string; price: number },
//     { product: string; price: number }
//   ];
// };
// const shoppingCart: Products1 = {
//   customer: {
//     name: "Alice",
//     email: "alice@example.com",
//   },
//   items: [
//     { product: "Widget", price: 10 },
//     { product: "Gadget", price: 25 },
//     { product: "Thingamabob", price: 15 },
//   ],
// };
// var calculateTotalPrice = () => {
//   var totalproduct = shoppingCart.items.map((index) => index.price);
//   var includingtax = totalproduct.reduce((sum1, sum2) => sum1 + sum2);
//   return includingtax;
// };
// console.log(calculateTotalPrice());
// // // Question 19: Looping and Array Filtering

// // // You are given an array of numbers:

// // // const scores = [85, 90, 78, 92, 88];
// // // Write a function named findPassingScores that takes the array as a parameter and returns a new array containing only the scores that are 80 or above.
// var findPassingScores = () => scores.filter((index) => index > 80);
// console.log(findPassingScores());
// // // Question 20: Object Manipulation and TypeScript Arrays

// // // You are given an array of company objects, where each object has properties name (string) and employees (array of strings):

// // // const companies = [
// // // { name: "Company A", employees: ["Alice", "Bob", "Charlie"] },
// // // { name: "Company B", employees: ["David", "Eve", "Frank"] }
// // // ];
// // // Write a function named calculateTotalEmployees that takes the array of companies as a parameter and returns the total number of employees across all companies.
// type company = [
//   {
//     name: string;
//     employees: string[];
//   },
//   {
//     name: string;
//     employees: string[];
//   }
// ];
// const companies = [
//   { name: "Company A", employees: ["Alice", "Bob", "Charlie"] },
//   { name: "Company B", employees: ["David", "Eve", "Frank", `ahmad`] },
// ];
// var totalEmployees: number = 0;
// var calculateTotalEmployees = () => {
//   totalEmployees =
//     companies[0].employees.length + companies[1].employees.length;
//   return totalEmployees;
// };
// console.log(calculateTotalEmployees());

// // // Question 21: Function Composition and String Manipulation

// // // Write a function named generateUsername that takes firstName and lastName as parameters and generates a username using the first two letters of the first name followed by the first three letters of the last name, all in lowercase. For example, generateUsername("Alice", "Smith") should return "alsmi".
// // var generateUsername = (firstname: any, lastname: any) => {
// //   var firstName: string = firstname.slice(0, 2);
// //   var lastName: string = lastname.slice(0, 3);
// //   var fullName = firstName + lastName;
// //   return fullName;
// // };
// // console.log(
// //   generateUsername(
// //     prompt(`Enter your firstName`),
// //     prompt(`Enter your lastName`)
// //   )
// // );
// // // Question 22: Looping and Object Manipulation

// // // You are given an array of product objects, where each object has properties name (string) and price (number):

// // // const products = [
// // // { name: "Widget", price: 10 },
// // // { name: "Gadget", price: 25 },
// // // { name: "Thingamabob", price: 15 }
// // // ];
// // // a. Write a function named findExpensiveProducts that takes the array as a parameter and returns an array of product names with prices above $20.
// interface price {
//   name: string;
//   price: number;
// }
// type price1 = [price, price, price];
// const products2: price1 = [
//   { name: "Widget", price: 10 },
//   { name: "Gadget", price: 25 },
//   { name: "Thingamabob", price: 15 },
// ];
// var findExpensiveProducts = () => products2.filter((index) => index.price > 20);
// console.log(findExpensiveProducts());
// // // b. Write a function named calculateTotalPriceWithTax that takes the array as a parameter, calculates the total price including a 10% tax for each product, and returns the overall total.
// var calculateTotalPriceWithTax = () => {
//   var totalproduct = products2.map(
//     (index) => index.price + (index.price / 100) * 10
//   );
//   var includingtax = totalproduct.reduce((sum1, sum2) => sum1 + sum2);
//   return includingtax;
// };
// console.log(calculateTotalPriceWithTax());
// // // You are given an array of sentences:

// // // const sentences = ["Hello, TypeScript.", "Coding is fun!", "TypeScript is awesome."];
// // // a. Write a function named countWords that takes the array as a parameter and returns the total number of words across all sentences.
const sentences: string[] = [
  "Hello, TypeScript.",
  "Coding is fun!",
  "TypeScript is awesome.",
];
var countWords = () => {
  console.log(sentences.map((index) => index.length));
};
countWords();
// // // b. Write a function named findLongestSentence that takes the array as a parameter and returns the longest sentence.
function findLongestSentence(sentences: string[]): string | null {
  let longestSentence: string = sentences[0];

  for (let i = 1; i < sentences.length; i++) {
    if (sentences[i].length > longestSentence.length) {
      longestSentence = sentences[i];
    }
  }

  return longestSentence;
}

const longestSentence = findLongestSentence(sentences);

console.log(`The longest sentence is: ${longestSentence}`);

// // // Question 24: Classes and Decision Making

// // // Define a class named Student with properties name and score. Create instances of Student representing different students. Write a function named findTopStudent that takes an array of Student objects as a parameter and returns the student with the highest score.
class Student {
  name: string;
  score: number;

  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }
}
const students: Student[] = [
  new Student("Alice", 97),
  new Student("Bob", 98),
  new Student("Charlie", 92),
];

function findTopStudent(students: Student[]): Student {
  let topStudent: Student = students[0];

  for (let i = 0; i < students.length; i++) {
    if (students[i].score > topStudent.score) {
      topStudent = students[i];
    }
  }

  return topStudent;
}

const topStudent = findTopStudent(students);
console.log(
  `The top student is ${topStudent.name} with a score of ${topStudent.score}`
);
