// // // 1. Writ5e a ts program to print day of week name using switch case.
// // var printday = (week_day: any) => {
// //   switch (week_day) {
// //     case `1`:
// //       console.log(`Today is Monday`);
// //       break;
// //     case `2`:
// //       console.log(`Today is Tuesday`);
// //       break;
// //     case `3`:
// //       console.log(`Today is wednesday`);
// //       break;
// //     case `4`:
// //       console.log(`Today is Thursday`);
// //       break;
// //     case `5`:
// //       console.log(`Today is Friday`);
// //       break;
// //     case `6`:
// //       console.log(`Today is Saturday`);
// //       break;
// //     case `7`:
// //       console.log(`Today is Sunday`);
// //       break;
// //     default:
// //       console.error(`Please enter number from 1-7`);
// //   }
// // };
// // printday(prompt(`Enter a number from 1-7`));
// // // // 2. Write a ts program print total number of days in a month using switch case.
// // var printMonth = (month: any) => {
// //   switch (month) {
// //     case `january`:
// //       console.log(`There are total 31 days in month ${month}`);
// //       break;
// //     case `march`:
// //       console.log(`There are total 31 days in month ${month}`);
// //       break;
// //     case `may`:
// //       console.log(`There are total 31 days in month ${month}`);
// //       break;
// //     case `july`:
// //       console.log(`There are total 31 days in month ${month}`);
// //       break;
// //     case `august`:
// //       console.log(`There are total 31 days in month ${month}`);
// //       break;
// //     case `october`:
// //       console.log(`There are total 31 days in month ${month}`);
// //       break;
// //     case `december`:
// //       console.log(`There are total 31 days in month ${month}`);
// //       break;
// //     case `april`:
// //       console.log(`There are total 30 days in month ${month}`);
// //       break;
// //     case `june`:
// //       console.log(`There are total 30 days in month ${month}`);
// //       break;
// //     case `september`:
// //       console.log(`There are total 30 days in month ${month}`);
// //       break;
// //     case `november`:
// //       console.log(`There are total 30 days in month ${month}`);
// //       break;
// //     case `febraury`:
// //       console.log(`There are total 28 days in month ${month}`);
// //       break;
// //     case `febraury2`:
// //       console.log(
// //         `There are total 29 days in month ${month} beacuse this is leap year`
// //       );
// //       break;
// //     default:
// //       console.error(`Please enter month name not it's number`);
// //   }
// // };
// // printMonth(
// //   prompt(
// //     `Please enter month name and write febraury2 for the leap year febraury`
// //   )
// // );
// // // // 3. Write a ts program to check whether an alphabet is vowel or consonant using switch case.
// // var alphabet = (check_vowel: any) => {
// //   switch (check_vowel) {
// //     case `A`:
// //       console.log(`The alphabet is vowel`);
// //       break;
// //     case `E`:
// //       console.log(`The alphabet is vowel`);
// //       break;
// //     case `I`:
// //       console.log(`The alphabet is vowel`);
// //       break;
// //     case `O`:
// //       console.log(`The alphabet is vowel`);
// //       break;
// //     case `U`:
// //       console.log(`The alphabet is vowel`);
// //       break;
// //     case `a`:
// //       console.log(`The alphabet is vowel`);
// //       break;
// //     case `e`:
// //       console.log(`The alphabet is vowel`);
// //       break;
// //     case `i`:
// //       console.log(`The alphabet is vowel`);
// //       break;
// //     case `o`:
// //       console.log(`The alphabet is vowel`);
// //       break;
// //     case `u`:
// //       console.log(`The alphabet is vowel`);
// //       break;
// //     default:
// //       console.log(`the alphabet is consonant`);
// //       break;
// //   }
// // };
// // alphabet(
// //   prompt(`Enter an alphabet to know wether alphabet is vowel or consonant`)
// // );
// // // // 4. Write a ts program to find maximum between two numbers using switch case.
// // var compare_num: any = prompt(`Enter first number`);
// // var compare_num2: any = prompt(`Enter second number`);
// // switch (true) {
// //   case compare_num > compare_num2:
// //     console.log(`The number ${compare_num} is greater than ${compare_num2}`);
// //     break;
// //   case compare_num < compare_num2:
// //     console.log(`The number ${compare_num2} is greater than ${compare_num}`);
// //     break;
// //   default:
// //     console.log(`The number ${compare_num2} is equal to ${compare_num}`);
// //     break;
// // }
// // // // 5. Write a ts program to check whether a number is even or odd using switch case.
// // var check_even: any = prompt(
// //   `Enter a number to know wether the number is odd or even`
// // );
// // switch (true) {
// //   case check_even % 2 == 0:
// //     console.log(`The number ${check_even} is an even number`);
// //     break;
// //   case check_even % 2 !== 0:
// //     console.log(`The number ${check_even} is an odd number`);
// //     break;
// //   case check_even == 0:
// //     console.log(`The number ${check_even} is zero `);
// //     break;
// //   default:
// //     console.error(` Kindly Enter a number`);
// //     break;
// // }
// // // // 6. Write a ts program to check whether a number is positive, negative or zero using switch case.
// // var num: any = prompt(
// //   `Enter a number to know wether the number is positive ,negative or zero `
// // );
// // switch (true) {
// //   case num > 0:
// //     console.log(`The number ${num} is positive`);
// //     break;
// //   case num < 0:
// //     console.log(`The number ${num} is negative`);
// //     break;
// //   case num == 0:
// //     console.log(`The number ${num} is zero`);
// //     break;
// //   default:
// //     console.error(`please enter a number`);
// //     break;
// // }
// // // // 7. Write a ts program to create Simple Calculator using switch case
// var first_value: any = prompt(`Enter first value`);
// var first_value1: number = parseInt(first_value);
// var sign: any = prompt(`enter a sign of +,-,/,*`);
// var second_value: any = prompt(`Enter second value `);
// var second_value1: number = parseInt(second_value);
// switch (sign) {
//   case `+`:
//     console.log(
//       `the addition between  two numbers, number1: ${first_value1} number2: ${second_value1} is = ${
//         first_value1 + second_value1
//       }`
//     );
//     break;
//   case `-`:
//     console.log(
//       `the subtraction between two numbers, number1: ${first_value} and number2: ${second_value} is = ${
//         first_value - second_value
//       }`
//     );
//     break;
//   case `*`:
//     console.log(
//       `the products of two numbers, number1: ${first_value} and number2: ${second_value} is = ${
//         first_value * second_value
//       }`
//     );
//     break;
//   default:
//     console.log(
//       `the division between two numbers, number1: ${first_value} and number2: ${second_value} is = ${
//         first_value / second_value
//       }`
//     );
//     break;
// }
