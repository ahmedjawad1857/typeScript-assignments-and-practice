//1. Write a ts program to print all natural numbers from 1 to n. - using for loop
// var n: any = prompt(`enter a number to print digits 1 to your added number`);
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }
// 2. Write a ts program to print all natural numbers in reverse (from n to 1). - using for loop
// var hello: any = prompt(
//   `enter a number to print digits from your added number to 1`
// );
// for (let i = hello; i >= 1; i--) {
//   console.log(i);
// }
//3. Write a ts program to print all alphabets from a to z. - using for loop
// var a: string = `a`;
// var z: string = `z`;
// var alphabet: string = ``;
// for (let i = a.charCodeAt(0); i <= z.charCodeAt(0); i++) {
//   alphabet = String.fromCharCode(i);
//   console.log(alphabet);
// }
// 4. Write a ts program to print all even numbers between 1 to 100. - using for loop
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// 5. Write a ts program to print all odd number between 1 to 100.
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// 6. Write a ts program to find sum of all natural numbers between 1 to n.
// var natural: any = prompt(
//   `enter a number which you want to add from 1 to number which you enter in prompt`
// );

// let sum: number = 0;
// for (let i = 1; i <= natural; i++) {
//   sum += i;
// }
//  console.log(` this is the sum of all natural number from 1 to number which you enter in prompt ${sum}`
// );
// 7. Write a ts program to find sum of all even numbers between 1 to n.

// var even: any = prompt(
//   `enter a number which you want to add EVEN NUMBER from 1 to number which you enter in prompt`
// );

// let evensum: number = 0;
// for (let i = 1; i <= even; i++) {
//   if (i % 2 == 0) evensum += i;
// }
// console.log(
//   ` this is the sum of even number from 1 to number which you enter in prompt ${evensum}`
// );
// 8. Write a ts program to find sum of all odd numbers between 1 to n.

// var odd: any = prompt(
//   `enter a number which you want to add from 1 to number which you enter in prompt`
// );

// let oddsum: number = 0;
// for (let i = 1; i <= odd; i++) {
//   if (i % 2 !== 0) oddsum += i;
// }
// console.log(
//   ` this is the sum of odd number from 1 to number which you enter in prompt ${oddsum}`
// );
// 9. Write a ts program to print multiplication table of any number.

// var table: any = prompt(`enter a number to see the number tables`);

// console.log(`table of ${table}`);
// for (let i = 1; i <= 10; i++) {
//   console.log(`${table} x ${i} = ${table * i}`);
// }
// 10. Write a ts program to count number of digits in a number.
// var hello: any = prompt(`enter a digit to know how many digits are there`);
// var digit: number = 0;

// for (let i = 0; i < hello.length; i++) {
//   var element: any = hello[i];

//   if (element >= `0` && element <= `9`) {
//     digit++;
//   }
// }
// console.log(`there are total  ${digit} digit `);
//
//11. Write a ts program to find first and last digit of a number.

// var inputNumber: any = prompt(`enter a number`);
// var numberAsString: string = inputNumber.toString();

// var firstDigit: number = 0;
// var lastDigit: number = 0;

// for (let i = 0; i < numberAsString.length; i++) {
//   if (i == 0) {
//     firstDigit = parseInt(numberAsString.charAt(i));
//   }
//   if (i === numberAsString.length - 1) {
//     lastDigit = parseInt(numberAsString.charAt(i));
//   }
// }
// console.log(`Input number: ${inputNumber}`);
// console.log(`First digit: ${firstDigit}`);
// console.log(`Last digit: ${lastDigit}`);
// 12. Write a ts program to find sum of first and last digit of a number.
// var inputNumber: any = prompt(`enter a number`);
// var numberAsString: string = inputNumber.toString();

// var firstDigit: number = 0;
// var lastDigit: number = 0;
// var sum: number = 0;

// for (let i = 0; i < numberAsString.length; i++) {
//   if (i == 0) {
//     firstDigit = parseInt(numberAsString.charAt(i));
//   }
//   if (i === numberAsString.length - 1) {
//     lastDigit = parseInt(numberAsString.charAt(i));
//   }
// }
// sum += lastDigit + firstDigit;
// console.log(`Input number: ${inputNumber}`);
// console.log(`First digit: ${firstDigit}`);
// console.log(`Last digit: ${lastDigit}`);
// console.log(`Sum of First and Last digit: ${sum}`);

//  16. Write a ts program to enter a number and print its reverse.

// var hello: any = prompt(`enter a number to see reverse of string`);
// var reversed: string = ``;
// for (let i = hello.length - 1; i >= 0; i--) {
//   reversed += hello[i];
// }

// console.log("Reversed number:", reversed);
// 17. Write a ts program to check whether a number is palindrome or not.
// var palindrome: any = prompt(
//   `enter an number to know that it is palindrome or not`
// );

// var isPalindrome: boolean = true;

// for (let i = 0; i < palindrome.length; i++) {
//   if (palindrome[i] != palindrome[palindrome.length - 1 - i]) {
//     isPalindrome = false;
//   }
// }

// if (isPalindrome) {
//   console.log("The number is a palindrome.");
// } else {
//   console.log("The number is not a palindrome.");
// }
// 13. Write a ts program to swap first and last digits of a number.
// var numberToSwap: any = prompt(
//   `enter a number to swap its first and last digit`
// );

// var numStr: string = numberToSwap.toString();
// var length: number = numStr.length;
// var swappedStr: string = "";

// for (let i = length - 1; i >= 0; i--) {
//   swappedStr += numStr[i];
// }

// var swappedNumber: number = parseInt(swappedStr, 10);

// console.log(`Original Number: ${numberToSwap}`);
// console.log(`Number after swapping first and last digits: ${swappedNumber}`);
// 14. Write a ts program to calculate sum of digits of a number.

// var number: any = prompt(`enter a number to know the  sum of number's digit`);

// var numStr1: string = number.toString();

// var sum: number = 0;

// for (let i = 0; i < numStr1.length; i++) {
//   var digit = parseInt(numStr1[i]);
//   sum += digit;
// }

// console.log(`Number: ${number}`);
// console.log(`Sum of Digits: ${sum}`);
// 15. Write a ts program to calculate product of digits of a number.
// var number: any = prompt(
//   `enter a number to calculate the product of digits of a number`
// );

// var numtostr: string = number.toString();

// var product: number = 1;

// for (let i = 0; i < numtostr.length; i++) {
//   var digit = parseInt(numtostr[i]);
//   product *= digit;
// }

// console.log(`Number: ${number}`);
// console.log(`Product of Digits: ${product}`);
// 20. Write a ts program to print all ASCII character with their values.
// for (let i = 0; i <= 256; i++) {
//   console.log(i, String.fromCharCode(i));
// }


