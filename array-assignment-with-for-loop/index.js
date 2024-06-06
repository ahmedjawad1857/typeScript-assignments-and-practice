// // 1. Write a ts program to read and print elements of array.
// var sports: string[] = [`Cricket`, `Soccer`, `Badminton`, `Hockey`];
// for (let i = 0; i < sports.length; i++) {
//   console.log(sports[i]);
// }
// // 2. Write a ts program to print all negative elements in an array.
// var negative: number[] = [-1, 0, -3, 9, -4, 9];
// for (let i = 0; i < negative.length; i++) {
//   if (negative[i] < 0) {
//     console.log(negative[i]);
//   }
// }
// // 3. Write a ts program to find sum of all array elements.
// var sum: number[] = [8, 9, -8, 98, 9];
// var sumOfArray: number = 0;
// for (let i = 0; i < sum.length; i++) {
//   sumOfArray += sum[i];
// }
// console.log(`Total sum of array :`, sumOfArray);
// // 4. Write a ts program to find maximum and minimum element in an array.
// var myArray: number[] = [5, 3, -9, 100, 7];
// var max: number = myArray[0];
// var min: number = myArray[0];
// for (let i = 1; i < myArray.length; i++) {
//   if (myArray[i] > max) {
//     max = myArray[i];
//   }
//   if (myArray[i] < min) {
//     min = myArray[i];
//   }
// }
// console.log("Maximum element:", max);
// console.log("Minimum element:", min);
// // 5. Write a ts program to find second largest element in an array.
// var myArray:number[] = [5, 3, 9, 1, 7, 90];
// var largest:number = myArray[0];
// var secondLargest:number = myArray[1];
// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] > largest) {
//     secondLargest = largest;
//     largest = myArray[i];
//   } else if (myArray[i] > secondLargest) {
//     secondLargest = myArray[i];
//   }
// }
// console.log("Second largest element:", secondLargest);
// // 6. Write a ts program to count total number of even and odd elements in an array.
// var oddArray: number[] = [8, 2, 948, 494, 38, 1, 340, 987, 999];
// var odd: number = 0;
// var even: number = 0;
// for (let i = 0; i < oddArray.length; i++) {
//   if (oddArray[i] % 2 == 0) {
//     even++;
//   } else {
//     odd++;
//   }
// }
// console.log(`there are total ${even} even numbers in the Array`);
// console.log(`there are total ${odd} odd numbers in the Array`);
// // 7. Write a ts program to count total number of negative elements in an array.
// var negative: number[] = [-1, 0, -3, -9, -4, 9, 48, -94, 47, -98];
// var count: number = 0;
// for (let i = 0; i < negative.length; i++) {
//   if (negative[i] < 0) {
//     count++;
//   }
// }
// console.log(`Total number of negative digit in array:`, count);
// // 8. Write a ts program to copy all elements from an array to another array.
// var copy: string[] = ["ahmad", "sheraz", "shoaib", "Rizwan"];
// var copiedarray: string[] = [];
// for (let i = 0; i < copy.length; i++) {
//   copiedarray.push(copy[i]);
// }
// console.log(`this is copied array ${copiedarray}`);
// // 9. Write a ts program to insert an element in an array.
// var insert: string[] = ["ahmad", "sheraz", "shoaib", "Rizwan"];
// var insertstring: any = prompt(`hello`);
// for (let i = 0; i < insert.length; i++) {
//   insert.push(insertstring);
//   console.log(
//     `in this array word ${insertstring} inserted in the array after inserting element the array ook like this ${insert}`
//   );
//   break;
// }
// // 10. Write a ts program to delete an element from an array at specified position.
// var remove: number[] = [1, 2, 3, 4, 5];
// var indextoremove: any = prompt(
//   `Enter a index of word in array which you want to remove`
// );
// for (let i = 0; i < remove.length; i++) {
//   if (i === indextoremove) {
//   }
//   if (i > indextoremove) {
//     remove[i - 1] = remove[i];
//   }
// }
// if (indextoremove < 0 || indextoremove >= remove.length) {
//   console.error("Invalid position: Out of range");
// } else {
//   remove.length = remove.length - 1;
//   console.log("Result array:", remove);
// }
// 16. Write a ts program to find reverse of an array.
// var reverse: string[] = [`suzuki`, `changan`, `toyota`];
// console.log(`Original Array:`, reverse);
// console.log(`Reversed Array:`, reverse.reverse());
// 19. Write a ts program to sort array elements in ascending or descending order.
// var sorting: string[] = [`suzuki`, `changan`, `toyota`];
// var sort: string[] = sorting.sort();
// console.log(`Original Array:`, sorting);
// console.log(`sorted  Array in ascending order:`, sorting.sort());
// console.log(`sorted  Array in descending order:`, sort.reverse());
// 20. Write a ts program to sort even and odd elements of array separately.
// var odd: number[] = [1, 13, 7, 5, 9, 17];
// var even: number[] = [2, 16, 74, 58, 96, 170];
// console.log(`Original odd array ${odd}`);
// console.log(
//   `This is an sorted odd array: ${odd.sort(function (a, b) {
//     return a - b;
//   })}`
// );
// console.log(`Original even array ${even}`);
// console.log(
//   `This is an sorted even array: ${even.sort(function (a, b) {
//     return a - b;
//   })}`
// );
// 17. Write a ts program to put even and odd elements of array in two separate array.
// var odd = [1, 9, 392, 3812, 329, 1123, 58, 6];
// var oddArray = [];
// var evenArray = [];
// for (var i = 0; i < odd.length; i++) {
//   if (odd[i] % 2 == 0) {
//     evenArray.push(odd[i]);
//   }
//   if (odd[i] % 2 !== 0) {
//     oddArray.push(odd[i]);
//   }
// }
// console.log(`this is an even Array ${evenArray}`);
// console.log(`this is an odd Array ${oddArray}`);
// 18. Write a ts program to search an element in an array.
// var search = [10, 20, 30, 40, 50];
// var searchElementValue = 300;
// var index = -1;
// if (search.indexOf(searchElementValue) !== index) {
//   console.log(
//     `the word ${searchElementValue} found on index no ${search.indexOf(
//       searchElementValue
//     )}`
//   );
// } else {
//   console.log(`the word ${searchElementValue} is not found `);
// }
// 15. Write a ts program to merge two array to third array.
// var bike: string[] = [`suzuki`, `honda`, `road prince`];
// var car: string[] = [`mercedes`, `toyota`, `changan`];
// var bikeAndcar: string[] = bike.concat(car);
// console.log(`first array ${bike}`);
// console.log(`merging of two array to third:${bikeAndcar}`);
// 11. Write a ts program to count frequency of each element in an array.
// var a: number[] = [1, 3, 2, 1, 3, 2, 1, 3, 18, 30];
// for (let i = 0; i < a.length; i++) {
//   var b: number = 1;
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[i] == a[j]) {
//       b++;
//       a.splice(j, 1);
//     }
//   }
//   console.log(`${a[i]} occurs ${b} time(s) in array`);
// }
// 12. Write a ts program to print all unique elements in the array.
// var array: number[] = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 19];
// for (let i = 0; i < array.length; i++) {
//   var isUnique = true;
//   for (let j = 0; j < array.length; j++) {
//     if (i !== j && array[i] === array[j]) {
//       isUnique = false;
//       break;
//     }
//   }
//   if (isUnique) {
//     console.log(array[i]);
//   }
// }
// 13. Write a ts program to count total number of duplicate elements in an array.
// var duplicateArray: number[] = [1, 1, 8, 9, 8, 9];
// var duplicates: number[] = [];
// var duplicatecount: number = 0;
// for (let i = 0; i < duplicateArray.length; i++) {
//   for (let j = i + 1; j < duplicateArray.length; j++) {
//     if (duplicateArray[i] == duplicateArray[j]) {
//       duplicatecount++;
//       duplicates.push(duplicateArray[i]);
//     }
//   }
// }
// console.log("Duplicate elements:", duplicatecount);
// 14. Write a ts program to delete all duplicate elements from an array.
// var originalArray = [1, 2, 3, 4, 2, 3, 5, 6, 1, 6, 9, 8];
// console.log(`OriginalArray:` ,originalArray);
// for (var i = 0; i < originalArray.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (originalArray[i] === originalArray[j]) {
//       originalArray.splice(i, 1);
//     }
//   }
// }
// console.log("Array after removing duplicate elements:", originalArray);
// 21. Write a ts program to left rotate an array.
// Assuming you have an object like this
var myObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value",
};
// Get an array of keys from the object
var keys = Object.keys(myObject);
// Get the length of the array, which is the number of key-value pairs in the object
var numberOfKeyPairs = keys.length;
console.log(numberOfKeyPairs); // This will output the number of key-value pairs in the object
