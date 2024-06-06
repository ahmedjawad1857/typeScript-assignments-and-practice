"use strict";
// // Section 1: TypeScript Overview
// // What is TypeScript and how does it relate to JavaScript?
// // Ans. Typescript is a superset of javascript.Typescript is also known as framework of javascript.
// // typescript also support all js libraries.
// // List three features of TypeScript.
// // Ans. i.Typescript suppert all js libraries
// // ii.Typescript have less chances of errors than javascript
// // iii.Typescript is same as javascript .T here was only one difference that in typescript we need to give type to  variables,functions etc
// // Explain why using TypeScript might be beneficial for a project.
// // typescript has less chances of error. In typescript we give types of every variables functions etc Which help us to know all things about variables which is good because it protect from error approximately 100% and there is no problem of libraries because typescript support all javascript libraries and it give us options about the code such as if we write only for than ts  gave us many options of for loop syntax,for...of loop syntax etc
// // Section 2: Environment Setup
// // Describe the steps to set up a local environment for TypeScript development.
// // Ans. First we download node js and then we download autocompiler
// // secondly we open terminal in our coding app and then we run the command of tsc filename.ts for making javascript
// // file after this command we run the command of tsc filename.ts -w for compiling and after this command we run the  command  of tsc filename.ts --init to make tsconfig file
// // How can you use the online "Try it Option" for TypeScript?
// // Ans.Many Website teaching typescript where we learn and try it for free e.g W3school
// // Name one Integrated Development Environment (IDE) that provides support for TypeScript.
// // Ans..Vscode
// // Section 3: Basic Syntax and Operators
// //  Write a TypeScript code snippet to declare a variable and assign it a value of type number.
// // Ans..
var example = 56;
// // Explain the differences between the == and === operators in TypeScript.
// // Ans.. == operator is used to compare values that they are equal or not .
// // === operater is used to compare values that there type  there value are equal or not.
// // What are short-circuit operators in TypeScript? Provide an example.
// // Ans..Short circuit operators are only two operators the ||(or) operator and the &&(and) operator
// // &&(and) operator check the both conditions are true and ||(or) operator check that only one condition is true
// // Example of &&(and) operator
if (1 > 2 && 1 < 3) {
    console.log(`The statement is true`);
}
else {
    console.log(`The statement is false`);
}
// // Example of ||(or) operator
if (1 > 2 || 1 < 3) {
    console.log(`The statement is true`);
}
else {
    console.log(`The statement is false`);
}
// // Section 4: Decision Making and Loops
// //  Write a TypeScript for...of loop to iterate over an array of strings and print each element.
// // Ans.
var arr = [2, 6, 7, 53, 2, 4, 6, 7, 8];
for (const i of arr) {
    console.log(i);
}
// // Explain the difference between the if statement and the switch statement in TypeScript.
// // In if statemnt we need to use == sign but in switch stsement we dont need to give == operator and there is only and also there we need to use break keyword after every case of switch statement syntax difference The rest are the same
// // Switch statement syntax
// // switch(key){
// //    case value:
// //         print and console here
// //         break;
// //         default:
// //             print and console here
// //             break
// // }
// // If statement syntax
// if(condition){
//     print and console here
// }
// else{
//     print and console here
// }
// // Write a TypeScript do...while loop that calculates the sum of integers from 1 to 10.
let i = 1;
do {
    console.log("do,while loop", i);
    i++;
} while (i <= 10);
// // Section 5: Functions
// // Define a TypeScript function called calculateAverage that takes an array of numbers as a parameter and returns the average.
var calculateAverage = (grade, total) => {
    var sumOfGrade = grade.reduce((sum1, sum2) => sum1 + sum2);
    return Math.floor((sumOfGrade / total) * 100);
};
console.log(calculateAverage([100, 89, 90, 98, 87], 500));
// // What are rest parameters in TypeScript? Provide an example of how to use them.
// // Ans..Rest parameters are unlimited parameters if we give rest parameters than we give unlimited arguments and there is one condition that the rest parameter always an array
// // For Example:
var rest = (...num) => {
    for (let i = 0; i < num.length; i++) {
        console.log(num[i]);
    }
};
rest(3, 6, 8, 9, 0, 6, 4, 3, 2);
// // Explain the concept of function overloads in TypeScript.
// // Ans..
// // Section 6: Data Types
// // Describe the purpose of the any type in TypeScript.
// // Ans. Any type is the type in which we write all data types .
// // The purpose of type any is that it is used on those variables where we have no idea what is the data type of this variable such as it is used on prompt because we don't know that what the user will enter on prompt.
// // How do you declare a tuple in TypeScript? Provide an example.
// // Ans.  Firstly we write keyword of var,let,const and then we write tuple name then  we giveit's type in square bracket and than down we write tuple name  and assign it it's value according to it's type sequence .
// // For Example:
let myTuple;
myTuple = [true, 5, `This is an example of tuple`, [27, 7, 9, 99]];
// // Section 7: Classes and Objects
// // Create a TypeScript class Person with properties name and age. Include  a constructor to initialize these properties.
class Person {
    constructor(age, name) {
        this.name = name;
        this.age = age;
    }
}
var person = new Person(13, `Ahmad`);
console.log(person);
// // Explain the concept of class inheritance in TypeScript. Provide an example.
// // Ans. Class inheritance mean class extend from other class for class inheritance we use extend keyword we only extend one parent we always extend parent from child Which meAns. that all properties of parent come in the child.
// // For Example.
class student extends Person {
    constructor(age, name, Class) {
        super(age, name);
        this.Class = Class;
    }
}
var student1 = new student(13, `Ahmad`, 8);
console.log(student1);
// // What is the significance of the static keyword in TypeScript classes?
// // Ans. static keyword is used to make a variable in class without constructor.Constructor has nothing to do with it.It is used without making object.
let indexP = prompt(`Enter a number`);
let index = 1;
// while (index <= 10) {
//   index++;
// }
do {
    console.log(`${indexP} x ${index} = ${index * indexP}`);
    index++;
} while (index <= 10);
