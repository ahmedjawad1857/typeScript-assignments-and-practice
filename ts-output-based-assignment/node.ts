// var x: any = prompt(`Enter a first value`);
// var y: any = prompt(`Enter a second value`);
// if (x > y) {
//   console.log(`the `, x, `is greater than `, y);
// } else {
//   console.log(`the `, y, `is greater than `, x);
// }
// var a: any = prompt(`Enter a first value`);
// var b: any = prompt(`Enter a second value`);
// var c: any = prompt(`Enter a third value`);
// if (a > b && a > c) {
//   console.log(a, ` is greater than `, b, `and`, c);
// } else if (b > c && b > a) {
//   console.log(c, ` is greater than `, b, `and`, a);
// } else if (c > b && c > a) {
//   console.log(b, ` is greater than `, a, `and`, c);
// } else {
//   console.log(a, b, c, `is equal`);
// }
// var e: any = prompt(`Enter a  value`);
// if (e > 0) {
//   console.log(e, `is positive number`);
// } else if (e < 0) {
//   console.log(e, `is negative number`);
// } else {
//   console.log(`the number is zero`);
// }
// var d: any = prompt(`Enter a  value`);

// if (d % 11 == 0 && d % 5 == 0) {
//   console.log(d, `is divisible by 5 and 11 both`);
// } else if (d % 5 == 0) {
//   console.log(d, `is divisible by 5`);
// } else if (d % 11 == 0) {
//   console.log(d, `is divisible by 11`);
// } else {
//   console.log(d, `is not divisible by 5 and 11 `);
// }
// var f: any = prompt(`Enter a  value`);
// if (f % 2 == 0) {
//   console.log(f, `is even number`);
// } else if (f % 1 == 0) {
//   console.log(f, `is odd number`);
// } else {
//   console.log(` please enter a number`);
// }
// var g: any = prompt(`Enter  year days to know that's a leap year or a year`);
// if (g == 366) {
//   console.log(`it is a leap year`);
// } else if (g == 365) {
//   console.log(`it is a  year`);
// } else {
//   console.log(`please enter a total days of the year`);
// }
// var characterw: any = prompt(
//   "Enter  a value to know that it is the alphabet or not"
// );
// if (characterw >= "A" && characterw <= "Z") {
//   console.log("this is a alphabet");
// } else if (characterw >= "a" && characterw <= "z") {
//   console.log("this iS alphabet");
// } else {
//   console.log("this is not an alphabet");
// }
// var character: any = prompt(
//   "Enter  a value to know that it is the vowel or consonant"
// );
// if (character == `a`) {
//   console.log(`this is a vowel`);
// }
// if (character == `a`) {
//   console.log(`this is a vowel`);
// } else if (character == `e`) {
//   console.log(`this is a vowel`);
// } else if (character == `i`) {
//   console.log(`this is a vowel`);
// } else if (character == `o`) {
//   console.log(`this is a vowel`);
// } else if (character == `u`) {
//   console.log(`this is a vowel`);
// } else if (character == `A`) {
//   console.log(`this is a vowel`);
// } else if (character == `E`) {
//   console.log(`this is a vowel`);
// } else if (character == `I`) {
//   console.log(`this is a vowel`);
// } else if (character == `O`) {
//   console.log(`this is a vowel`);
// } else if (character == `U`) {
//   console.log(`this is a vowel`);
// } else if (character >= "A" && character <= "Z") {
//   console.log("this is a consonant");
// } else if (character >= "a" && character <= "z") {
//   console.log("this is a consonant");
// } else {
//   console.log("this is not a vowel or consonant");
// }

// var characters: any = prompt(
//   `Enter  a value to know that it is the characters,digit or special character `
// );
// if (
//   (characters >= `A` && characters <= `Z`) ||
//   (characters >= `a` && characters <= `z`)
// ) {
//   console.log(`this is an Alphabet`);
// } else if (characters >= `0` && characters <= `9`) {
//   console.log(`this is a number`);
// } else {
//   console.log(`this is a special characer`);
// }
// var key: any = prompt(
//   `enter an alphabet to know wether it is uppercase or lowercase`
// );
// if (key >= `A` && key <= `Z`) {
//   console.log(`this alphabet is uppercase`);
// } else if (key >= `a` && key <= `z`) {
//   console.log(`this alphabet is lowercase`);
// } else {
//   console.log(`this is not an alphabet `);
// }

var week: any = prompt(
  `Enter a number (1-7) to know what is the day of week today`
);
if (week == 1) {
  console.log(`Today is Monday`);
} else if (week == 2) {
  console.log(`Today is Tuesday`);
} else if (week == 3) {
  console.log(`Today is Wednesday`);
} else if (week == 4) {
  console.log(`Today is Thursday`);
} else if (week == 5) {
  console.log(`Today is Friday`);
} else if (week == 6) {
  console.log(`Today is Saturday`);
} else if (week == 7) {
  console.log(`Today is Sunday`);
} else {
  console.log(`The character which you added is not 1-7`);
}
// var month: any =
//   prompt(`Enter a number (1-12) to know how many days are there in the month.
//  note:If this is a leap year so you enter numbers for febraury month is (13). `);
// if (
//   month == 1 ||
//   month == 3 ||
//   month == 5 ||
//   month == 7 ||
//   month == 8 ||
//   month == 10 ||
//   month == 12
// ) {
//   console.log(`There are 31 days in number`, month, ` month  `);
// } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//   console.log(`There are 30 days in number`, month, ` month  `);
// } else if (month == 2) {
//   console.log(`There are 28 days in number`, month, ` month  `);
// } else if (month == 13) {
//   console.log(`There are 29 days in number  month cause this is mleap year   `);
// } else {
//   console.log(`the character you entered is not a number (1-13)`);
// }
// var amount: any = prompt(
//   `enter a amount of money to know wether how many notes are there`
// );
// // var note500: any = 500;
// // var note100: any = 100;
// // var note50: any = 500;
// // var note20: any = 20;
// // var note100: any = 10;
// // var note5: any = 5;
// // var note2: any = 2;
// // var note1: any = 1;
// // if (amount >= note500) {
// //   console.log(`there arecushd notes`);
// // }
// if (amount % 1000) {
//   console.log(`there are notes`, amount);
// }
// var marks: any = prompt(`enter obtained marks of chemistry`);
// var marks: any = prompt(`enter obtained marks of biology`);
// var marks: any = prompt(`enter obtained marks of mathematics`);
// var marks: any = prompt(`enter obtained marks of physics`);
// var marks: any = prompt(`enter obtained marks of computer`);
// var percentage = (marks / 100) * 100;
// if (percentage >= 90) {
//   console.log(`your percentage is`, percentage, ` and your grade is A`);
// } else if (percentage >= 80) {
//   console.log(`your percentage is`, percentage, ` and your grade is B`);
// } else if (percentage >= 70) {
//   console.log(`your percentage is`, percentage, ` and your grade is C`);
// } else if (percentage >= 60) {
//   console.log(`your percentage is`, percentage, `+ and your grade is D`);
// } else if (percentage >= 40) {
//   console.log(`your percentage is `, percentage, ` and your grade is E`);
// } else if (percentage < 40) {
//   console.log(`your percentage is`, percentage, ` and your grade is F`);
// } else {
//   console.log(`please enter a valid marks`);
// }
// var bill: any = prompt("enter your bill units to know your bill");
// if (bill <= 50) {
//   console.log("your bill is Rs.", bill * 0.5 + ((bill * 0.5) / 50) * 100);
// } else if (bill <= 150) {
//   console.log("your bill is Rs.", bill * 0.75 + ((bill * 0.75) / 150) * 100);
// } else if (bill <= 250) {
//   console.log("your bill is Rs.", bill * 1.2 + ((bill * 1.2) / 250) * 100);
// } else if (bill > 250) {
//   console.log(`your bill is Rs.`, bill * 1.5 + ((bill * 1.5) / bill) * 100);
// } else {
//   console.log(`please enter a valid unit`);
// }
// var sellingprice: any = prompt("enter your  sellingprice ");
// var buyingprice: any = prompt("enter your  buyingprice ");
// var price: any = parseInt(sellingprice);
// var buyprice: any = parseInt(buyingprice);
// if (price > buyprice) {
//   console.log(`profit = `, price - buyprice);
// } else if (price < buyprice) {
//   console.log(`loss = `, buyprice - price);
// } else if (price == buyprice) {
//   console.log(`there is no profit or no loss`);
// } else {
//   console.log(`please enter a number`);
// }

var amoun: any = 12345;
var amount: any = parseInt(amoun);
var count: any = 0;
// var hello: string = `hello`;
// var second: number = hello.length;
// console.log(second);

if (amount >= 5000) {
  count += Math.floor(amount / 5000);
  amount %= 5000;
}
if (amount >= 1000) {
  count += Math.floor(amount / 1000);
  amount %= 1000;
}
if (amount >= 500) {
  count += Math.floor(amount / 500);
  amount %= 500;
}
if (amount >= 100) {
  count += Math.floor(amount / 100);
  amount %= 100;
}
if (amount >= 50) {
  count += Math.floor(amount / 50);
  amount %= 50;
}
if (amount >= 20) {
  count += Math.floor(amount / 20);
  amount %= 20;
}
if (amount >= 10) {
  count += Math.floor(amount / 10);
  amount %= 10;
}
if (amount >= 5) {
  count += Math.floor(amount / 5);
  amount %= 5;
}
if (amount >= 2) {
  count += Math.floor(amount / 2);
  amount %= 2;
}
if (amount >= 1) {
  count += Math.floor(amount / 1);
  amount %= 1;
}

console.log("Total number of notes:", count);
//. Write a ts program to find maximum between two numbers.
var num1: any = prompt(`enter a number`);
var num2: any = prompt(`enter a second number`);
num1 > num2
  ? console.log(num1, `is greater than`, num2)
  : console.log(num2, `is greater than`, num1);
// 2. Write a ts program to find maximum between three numbers.

var num3: any = prompt(`enter first number`);

var num4: any = prompt(`enter second number`);

var num5: any = prompt(`enter third number`);
num3 > num4 && num3 > num5
  ? num4 > num3 && num4 > num5
    ? console.log(`the greatest number is`, num3)
    : console.log(`the greatest number is`, num4)
  : console.log(`the greatest number is `, num5);
// 3. Write a ts program to check whether a number is negative, positive or zero.

var f: any = prompt(
  `enter a number to know wether the number is positive or negative or zero`
);
f > 0
  ? console.log(`the `, f, `is positive number`)
  : f > 0
  ? console.log(`the `, f, `is negative number`)
  : console.log(`the `, f, `is equal to zero`);
//  4. Write a ts program to check whether a number is divisible by 5 and 11 or not.
var x: any = prompt(
  `enter a number to know wether the number is dividible by 5 and 11 or not`
);
x % 5 == 0
  ? console.log(x, `is divisible by 5`)
  : x % 11 == 0
  ? console.log(x, `is divisible by 11`)
  : console.log(x, `is not divisible by 5 and 11`);
// 5. Write a ts program to check whether a number is even or odd.
var sheraz: any = prompt(
  `enter a number to know wether number is odd or even `
);
sheraz % 2 == 0
  ? console.log(`the`, sheraz, `is even number`)
  : sheraz % 2 != 0
  ? console.log(`the `, sheraz, `is odd number`)
  : console.log(`the`, sheraz, `is zero`);
