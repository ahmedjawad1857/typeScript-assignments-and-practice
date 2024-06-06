// 1. Write a JavaScript function to print the “Hello World” message
const printHelloWorld = () => console.log(`Hello World`);

printHelloWorld();
// 2. Write a function that returns the square of a number
const square = (squareparam: number) => {
  var squareOfNum: string = ` The Square Of A Number ${squareparam} is ${
    squareparam * squareparam
  } `;

  return squareOfNum;
};
console.log(square(Number(prompt(`Enter A Number To See It's Square`))));
// 3. Write a function to convert Fahrenheit to Centigrade
var degree = (fartocel: number): string => {
  var divide: number = 5 / 9;
  var celsius: string = `${fartocel} farhenheit is equal to ${
    (fartocel - 32) * divide
  } celsius`;
  return celsius;
};
console.log(
  degree(
    Number(
      prompt(
        `Enter A Temprature In Farhenheit Form To Convert It Into Celsius `
      )
    )
  )
);
const fahrenheit = (fartocel: number): string => {
  var divide: number = 5 / 9;
  var celsius: string = `${fartocel} farhenheit is equal to ${
    (fartocel - 32) * divide
  } celsius`;
  return celsius;
};
console.log(
  fahrenheit(
    Number(
      prompt(
        `Enter A Temprature In Farhenheit Form To Convert It Into Celsius `
      )
    )
  )
);
// 4. Write a function to reverse a number
const reverse = (reversenumber: any) => {
  var reversed: string = ``;
  for (let i = reversenumber.length - 1; i >= 0; i--) {
    reversed += reversenumber[i];
  }
  console.log("Reversed Number:", reversed);
};
reverse(Number(prompt(`enter a number to see reverse of number: `)));
// 5. Count number of Vowels in String

const count = (vowels: string) => {
  var count_vowels: number = 0;
  for (let i = 0; i < vowels.length; i++) {
    var element = vowels[i];
    if (
      element == `A` ||
      element == `E` ||
      element == `I` ||
      element == `O` ||
      element == `U` ||
      element == `a` ||
      element == `e` ||
      element == `i` ||
      element == `o` ||
      element == `u`
    ) {
      count_vowels++;
    }
  }
  console.log(`There are total ${count_vowels} vowels`);
};

count(String(prompt(`Enter a string to know how many total vowels in string`)));
//6. Write a function to add unlimited numbers
const infiniteparam = (...number: number[]): number => {
  var sum: number = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  return sum;
};
var infinite = infiniteparam(8, 239, 29, 19, 6, 7);
console.log(infinite);
// 7. Write a function to check if a number is even
const even = (checkeven: any) => {
  if (checkeven % 2 == 0) {
    console.log(`The number ${checkeven} is the even number`);
  } else if (checkeven % 1 == 0) {
    console.log(`The number ${checkeven} is not the even number`);
  } else {
    console.error(`Please Enter A Number`);
  }
};
even(prompt(`Enter A number To Know Wether The Number Is Even Or Not. `));
//  8. Write a function to generate a random number
function random(): number {
  var random_number: number = Math.random() + Math.random() + Math.random();
  var random_number1: number = Math.ceil(random_number);

  return random_number1;
}
console.log(random());
