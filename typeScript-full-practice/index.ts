var num1: number = 5;
console.log(` the value of num1 is`, num1);
var num2: number = 8;
console.log(` the value of num2 is`, num2);
var str: string = `Hello World`;
console.log(`the value of str is `, str);
var length: number = str.length;
console.log(`the value of length is `, length);
var bool: boolean = true;
console.log(`the value of bool is`, bool);
var notBool: boolean = !bool;
console.log(`the value of notBool is`, notBool);
var andResult: boolean = bool && notBool;
console.log(`the value of andResult is`, andResult);
var orResult: boolean = bool || notBool;
console.log(`the value of orResult is`, orResult);
var num3: number = 10;
console.log(`to check wether num3 is greater then num2`, num3 > num2);
var num4: number = 3;
console.log(
  `to check whether num4 multiplied by num2 is equal to num1 plus num3`,
  num4 * num2 == num1 + num3
);
var isEven: boolean = num1 % 2 == 0;
console.log(`the value of isEven is `, isEven);
var isPositive: boolean = num2 > 0;
console.log(`the value of isPositive is `, isPositive);
var isTruthy: boolean = Boolean(str);
console.log(`the value of isTruthy is `, isTruthy);


// Declare and initialize variables in TypeScript

// i: Declare variable with type and value
var Ahmad: number = 10;

// ii: Declare variable with type (value is undefined by default)
var Ahmad: number;

// iii: Declare variable with value (type is inferred as 'any')
var Ahmad = 10;

// iv: Declare variable (type is inferred based on the assigned value)
var Ahmad;

// Arithmetic operators in TypeScript
let a: number = 5;
let b: number = 3;

let sum: number = a + b;      // Addition
let difference: number = a - b;   // Subtraction
let product: number = a * b;   // Multiplication
let quotient: number = a / b;   // Division
let remainder: number = a % b;  // Modulus

// Increment and Decrement operators
let c: number = 10;
c++;    // Increment c by 1
c--;    // Decrement c by 1

// Relational operators in TypeScript
let x: number = 5;
let y: number = 3;

console.log(x > y);   // Greater than
console.log(x < y);   // Lesser than
console.log(x >= y);  // Greater than or equal to
console.log(x <= y);  // Lesser than or equal to
console.log(x == y);  // Equality
console.log(x != y);  // Not equal

// Logical operators in TypeScript
let p: boolean = true;
let q: boolean = false;

console.log(p && q);    // Logical AND
console.log(p || q);    // Logical OR
console.log(!p);        // Logical NOT

// Assignment operators in TypeScript
let m: number = 5;
let n: number = 3;

m += n;    // m = m + n
m -= n;    // m = m - n
m *= n;    // m = m * n
m /= n;    // m = m / n

// Ternary/conditional operator in TypeScript
let num: number = 10;
let result: string = (num % 2 == 0) ? "Even" : "Odd";
console.log(result);    // Output: Even

// String operator in TypeScript
let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = firstName + " " + lastName;
console.log(fullName);    // Output: John Doe

// Type Operator in TypeScript
let employee: any = "John";
console.log(typeof(employee));    // Output: string

// ASCII code in TypeScript
let char: string = String.fromCharCode(65);
console.log(char);    // Output: A
