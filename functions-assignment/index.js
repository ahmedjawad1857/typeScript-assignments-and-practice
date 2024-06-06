"use strict";
// // 1. Write a JavaScript function to print the “Hello World” message
// function hello_world() {
//   console.log(`Hello World`);
// }
// hello_world();
// // 2. Write a function that returns the square of a number
// function square(square1: any): number {
//   var squareOfNum: any = ` The Square Of A Number ${square1} is ${
//     square1 * square1
//   } `;
//   return squareOfNum;
// }
// console.log(square(prompt(`Enter A Number To See It's Square`)));
// // 3. Write a function to convert Fahrenheit to Centigrade
// function fahrenheit(fartocel: any): string {
//   var divide: number = 5 / 9;
//   var celsius: string = `${fartocel} farhenheit is equal to ${
//     (fartocel - 32) * divide
//   } celsius`;
//   return celsius;
// }
// console.log(
//   fahrenheit(
//     prompt(`Enter A Temprature In Farhenheit Form To Convert It Into Celsius `)
//   )
// );
// // 4. Write a function to reverse a number
// function reverse(reversenumber: any) {
//   var reversed: string = ``;
//   for (let i = reversenumber.length - 1; i >= 0; i--) {
//     reversed += reversenumber[i];
//   }
//   console.log("Reversed Number:", reversed);
// }
// reverse(prompt(`enter a number to see reverse of number`));
// // 5. Count number of Vowels in String
// function count(vowels: any) {
//   var count_vowels: number = 0;
//   for (let i = 0; i < vowels.length; i++) {
//     var element = vowels[i];
//     if (
//       element == `A` ||
//       element == `E` ||
//       element == `I` ||
//       element == `O` ||
//       element == `U` ||
//       element == `a` ||
//       element == `e` ||
//       element == `i` ||
//       element == `o` ||
//       element == `u`
//     ) {
//       count_vowels++;
//     }
//   }
//   console.log(`There are total ${count_vowels} vowels`);
// }
// count(prompt(`Enter a string to know how many total vowels in string`));
// //6. Write a function to add unlimited numbers
// function infiniteparam(...number: number[]): number {
//   var sum: number = 0;
//   for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//   }
//   return sum;
// }
// var infinite = infiniteparam(8, 239, 29, 19, 6, 7);
// console.log(infinite);
// // 7. Write a function to check if a number is even
// function even(checkeven: any) {
//   if (checkeven % 2 == 0) {
//     console.log(`The number ${checkeven} is the even number`);
//   } else if (checkeven % 1 == 0) {
//     console.log(`The number ${checkeven} is not the even number`);
//   } else {
//     console.error(`Please Enter A Number`);
//   }
// }
// even(prompt(`Enter A number To Know Wether The Number Is Even Or Not. `));
// //  8. Write a function to generate a random number
// function random(): number {
//   var random_number: number = Math.random() + Math.random() + Math.random();
//   var random_number1: number = Math.ceil(random_number);
//   return random_number1;
// }
// console.log(random());
