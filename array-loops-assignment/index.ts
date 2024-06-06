// // Map (Double the Numbers):
// // Given an array of numbers [3, 7, 11, 15], use the map() method to create a new array containing each number doubled.
var arrOfNum: number[] = [3, 7, 11, 15];
var double_num = arrOfNum.map((item) => item * 2);
console.log(`Original Array:`, arrOfNum);
console.log(`Double Array: `, double_num);
// // Filter (Even Numbers):
// // Given an array of integers [4, 9, 16, 21, 30], use the filter() method to extract an array of even numbers.
var arrOfIntegers: number[] = [4, 9, 16, 21, 30];
var evenArray = arrOfIntegers.filter((value) => value % 2 == 0);
console.log(`Original Array:`, arrOfIntegers);
console.log(`Even Array:`, evenArray);
// // Some (Positive Numbers Check):
// Given an array of integers [-5, -3, 0, 2, 4], use the some() method to check if there's at least one positive number.
var check_positive: number[] = [-5, -3, 0, 2, 4];
var check_positive_number = check_positive.some((value) => value > 0);
console.log(`there's a positive number in array`, check_positive_number);
// // Every (Greater than 18):
// // Given an array of ages [22, 19, 25, 30], use the every() method to verify if all ages are greater than 18.
var age: number[] = [22, 19, 25, 30];
var check_age = age.every((value) => value >= 18);
console.log(`All ages is over 18`, check_age);
// // Reduce (Sum of Squares):
// // Given an array of numbers [2, 3, 4, 5], use the reduce() method to calculate the sum of the squares of each number.
var array1: number[] = [2, 3, 4, 5];
var sum = array1.map((value) => value * value);
var sumOfSquares = sum.reduce((h1: any, h2: any) => h1 + h2);
console.log(`Sum of number's squares in array`, sumOfSquares);
// // Map (String Lengths):
// // Given an array of strings ['apple', 'banana', 'cherry'], use the map() method to create a new array containing the lengths of each string.
var fruits: string[] = [`apple`, `banana`, `cherry`];
var lengths = fruits.map((value) => value.length);
console.log(`Length of each string in array is `, lengths);
// // Filter (Prime Numbers):
// // Given an array of integers [7, 14, 23, 30, 37], use the filter() method to extract an array of prime numbers.
// Array of integers
const numbers: number[] = [7, 14, 23, 30, 37];

// Use filter() to extract prime numbers
const primeNumbers = numbers.filter(n => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
});

console.log(primeNumbers); // Output: [7, 23, 37]

console.log(`primenumbers:`, primeNumbers);
// // Some (Even Numbers Check):
// // Given an array of integers [3, 9, 11, 14, 21], use the some() method to check if there's at least one even number.
var array: number[] = [3, 9, 11, 14, 21];
var even_number_check = array.some((value) => value);
console.log(`there's a even number in array`, even_number_check);
// // Every (String Lengths Check):
// // Given an array of words ['dog', 'cat', 'elephant', 'lion'], use the every() method to verify if all words have more than 3 characters.
var animals: string[] = ["dog", "cat", "elephant", "lion"];
var animals_length = animals.every((value) => value.length > 3);
console.log(`All characters have lenght above 3 charcters `, animals_length);
// // Reduce (Product of Positives):
// // Given an array of numbers [-2, 3, -4, 5, -6], use the reduce() method to calculate the product of all positive numbers.
var product: number[] = [-2, 3, -4, 5, -6];
var productOfPositives = product.filter((value) => value > 0);
var productOfPositives1 = productOfPositives.reduce(
  (value1, value2) => value1 * value2
);
console.log(`product of all positive numbers in an array`, productOfPositives1);
// // Map (Uppercase Conversion):
// // Given an array of names ['Alice', 'Bob', 'Charlie'], use the map() method to create a new array containing the names in uppercase.
var uppercase: string[] = ["Alice", "Bob", "Charlie"];
var Touppercase = uppercase.map((value) => value.toUpperCase());
console.log(`Original Array:`, uppercase);

console.log(`Converted array to uppercase`, Touppercase);
// // Filter (Long Words):
// // Given an array of words ['apple', 'banana', 'grape', 'kiwi'], use the filter() method to extract an array of words with more than 5 characters.
var words: string[] = ["apple", "banana", "grape", "kiwi"];
var long_words = words.filter((value) => value.length > 5);
console.log(`words which has more than 5 charcters `, long_words);
// // Some (Multiple of 5 Check):1
// // Given an array of numbers [12, 27, 35, 42, 50], use the some() method to check if there's at least one number that's a multiple of 5.
var arr_num: number[] = [12, 27, 35, 42, 50];
var multiple5 = arr_num.some((value) => value % 5 == 0);
console.log(`there's a number which is multiple of 5:`, multiple5);
// // Every (Even Numbers Check):
// // Given an array of integers [2, 8, 16, 22, 30], use the every() method to verify if all numbers are even.
var number: number[] = [2, 8, 16, 22, 30];
var check_even_number = number.every((value) => value % 2 == 0);
console.log(`Full Array is even `, check_even_number);
// // Reduce (Total Age):
// // Given an array of objects with names and ages [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }], use the reduce() method to calculate the total age of all people.
var objects: any = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
var sumOfAges = objects.reduce(
  (value1: any, value2: any) => value1.age + value2.age
);
console.log(`Total sum of ages of both objects is`, sumOfAges);
