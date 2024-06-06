"use strict";
// // // Question 1: Array Manipulation and Function Interaction
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    calculateArea() {
        var blue = Math.PI * 40 * 40;
        return blue.toPrecision(5);
    }
}
class Rectangle {
    calculateArea() {
        return 50 * 40;
    }
}
var displayTotalArea = (new_array) => {
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
const words1 = ["Apple", "banana", "cherry", "date", "fig", `hello`];
var countVowels1 = 0;
var countVowels = () => {
    for (let i = 0; i < words1.length; i++) {
        for (let j = 0; j < words1.length; j++) {
            if (words1[i].charAt(j) === `A` ||
                words1[i].charAt(j) === `E` ||
                words1[i].charAt(i) === `I` ||
                words1[i].charAt(j) === `O` ||
                words1[i].charAt(j) === `U` ||
                words1[i].charAt(j) === `a` ||
                words1[i].charAt(j) === `e` ||
                words1[i].charAt(j) === `i` ||
                words1[i].charAt(j) === `o` ||
                words1[i].charAt(j) === `u`) {
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
const scores = [90, 98, 85, 95, 70, 84];
// var calculateAverageScore = (total: number) => {
//   var totalscore = scores.reduce((sum1, sum2) => sum1 + sum2);
//   var AverageScore = Math.floor((totalscore / total) * 100);
//   return AverageScore;
// };
// console.log(calculateAverageScore(500));
// // // b. Write a function named findHighestScore that takes the array as a parameter and returns the highest score.
var findHighestScore = () => {
    let HighestScore = scores[0];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > HighestScore) {
            HighestScore = scores[i];
        }
    }
    return HighestScore;
};
const HighestScore = findHighestScore();
console.log(`The highest score is: ${HighestScore}`);
class Car {
    startengine() {
        return `Car engine started`;
    }
}
class motorcycles {
    startengine() {
        return `Motorcycle engine started`;
    }
}
var startAllEngines = (motorcar) => {
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
var prompt1 = prompt(`Enter a number to see above elemnts in array fromyour number`);
const values = [10, 25, 30, 15, 5];
var Abovethreshold = [];
var countAboveThreshold = (threshold) => {
    for (let i = 0; i < values.length; i++) {
        const element = values[i];
        if (element > threshold) {
            Abovethreshold.push(element);
        }
    }
    return Abovethreshold;
};
console.log(`Numbers greater than threshold:  ${countAboveThreshold(prompt1)} with loop `);
// // with filter method
var countAboveThreshold2 = (threshold) => values.filter((index) => index > threshold);
console.log(`Numbers greater than threshold: ${countAboveThreshold2(prompt1)} with filter method`);
const students1 = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 18 },
    { name: "Charlie", age: 22 },
];
var totalage = [];
var totalage1 = 0;
var findAverageAge = () => {
    for (let i = 0; i < students1.length; i++) {
        totalage1 = totalage.push(students1[i].age);
    }
    var f = totalage.reduce((sum1, sum2) => sum1 + sum2) / students1.length;
    return f;
};
console.log(`Average ages of students: ${findAverageAge()}`);
// // // b. Write a function named findOldestStudent that takes the array as a parameter and returns the student with the highest age.
function findOldestStudent(students) {
    let oldestStudent = students[0];
    for (let i = 1; i < students.length; i++) {
        if (students1[i].age > oldestStudent.age) {
            oldestStudent = students[i];
        }
    }
    return oldestStudent;
}
const oldestStudent = findOldestStudent(students1);
console.log(`The oldest student is ${oldestStudent?.name} who is ${oldestStudent?.age} years old.`);
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
const sentences = [
    "Hello, TypeScript.",
    "Coding is fun!",
    "TypeScript is awesome.",
];
var countWords = () => {
    console.log(sentences.map((index) => index.length));
};
countWords();
// // // b. Write a function named findLongestSentence that takes the array as a parameter and returns the longest sentence.
function findLongestSentence(sentences) {
    let longestSentence = sentences[0];
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
    name;
    score;
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}
const students = [
    new Student("Alice", 97),
    new Student("Bob", 98),
    new Student("Charlie", 92),
];
function findTopStudent(students) {
    let topStudent = students[0];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score > topStudent.score) {
            topStudent = students[i];
        }
    }
    return topStudent;
}
const topStudent = findTopStudent(students);
console.log(`The top student is ${topStudent.name} with a score of ${topStudent.score}`);
