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

let arr: string[] = ["a", "b", "c", "d", "e", "f"];

let indextoremove: number = 2;

if (indextoremove < 0 || indextoremove >= arr.length) {
  console.error("Invalid position: Out of range");
} else {
  arr.splice(indextoremove, 1);
  console.log("Result array:", arr);
}

// 11. Write a ts program to count frequency of each element in an array.
interface frequencyType {
  [key: string]: number;
}
var frequency: string[] = ["a", "b", "c", "d", "e", "f", "f", "a"];
let countofEachElem: frequencyType = {};

for (let i = 0; i < frequency.length; i++) {
  var count: number = 0;
  for (let j = 0; j < frequency.length; j++) {
    if (frequency[i] == frequency[j]) {
      count++;
    }
  }
  countofEachElem[frequency[i]] = count;
}
console.log(countofEachElem);

// 12. Write a ts program to print all unique elements in the array.
let elems: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 10, 10, 11, 11, 12, 12];

let unique: number[] = [];

for (let i = 0; i < elems.length; i++) {
  if (unique.indexOf(elems[i]) === -1) {
    unique.push(elems[i]);
  }
}
console.log("unique items: ", unique);

// 13. Write a ts program to count total number of duplicate elements in an array.

let duplicates: number[] = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 8];

let duplicateCount: number = 0;

for (let i = 0; i < duplicates.length; i++) {
  for (let j = i + 1; j < duplicates.length; j++) {
    if (duplicates[i] == duplicates[j]) {
      duplicateCount++;
    }
  }
}

console.log(`duplicates count: ${duplicateCount}`);
// 14. Write a ts program to delete all duplicate elements from an array.

let arr1: number[] = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8];
console.log("before seleting duplicates", arr1);
for (let i = 0; i < arr1.length; i++) {
  for (let j = i + 1; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) {
      arr1.splice(j, 1);
    }
  }
}
console.log("after seleting duplicates", arr1);
// 15. Write a ts program to merge two array to third array.

let arr2: number[] = [1, 2, 3, 4, 5, 6];
let arr3: number[] = [7, 8, 9, 10, 11, 12];
let arr4: number[] = [];

for (let i = 0; i < arr2.length; i++) {
  arr4.push(arr2[i]);
}

for (let j = 0; j < arr3.length; j++) {
  arr4.push(arr3[j]);
}
console.log("merged Arrays:", arr4);

// 16. Write a ts program to find reverse of an array.
var reverse: string[] = [`suzuki`, `changan`, `toyota`];
console.log(`Original Array:`, reverse);
let reversedArray: string[] = [];
for (let i = reverse.length - 1; i >= 0; i--) {
  reversedArray.push(reverse[i]);
}

console.log(`Reversed Array:`, reversedArray);

// 17. Write a ts program to put even and odd elements of array in two separate array.

let nums: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArr: number[] = [];
let oddArr: number[] = [];
for (let i = 0; i < nums.length; i++) {
  const element = nums[i];
  if (element % 2 === 0) {
    evenArr.push(element);
  } else {
    oddArr.push(element);
  }
}

console.log(`Even Array:`, evenArr);

console.log(`Odd Array:`, oddArr);

// 18. Write a ts program to search an element in an array.

let search: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let elemToSearch = 9;
let indexOfSearchedElem: number[] = [];
for (let i = 0; i < search.length; i++) {
  if (search[i] === elemToSearch) {
    indexOfSearchedElem.push(i);
  }
}

if (indexOfSearchedElem.length > 0) {
  console.log(`Index/indices of the searched element:`, indexOfSearchedElem);
} else {
  console.log(`Element not found`);
}
// 19. Write a ts program to sort array elements in ascending or descending order.
let sorting: number[] = [3, 5, 2, 4, 53, 5, 7, 6];
let sortedInAsc: number[] = [...sorting];
let sortedInDes: number[] = [...sorting];

console.log("Original Array:", sorting);

// Bubble sort for ascending order
for (let i = 0; i < sortedInAsc.length - 1; i++) {
  for (let j = 0; j < sortedInAsc.length - 1 - i; j++) {
    if (sortedInAsc[j] > sortedInAsc[j + 1]) {
      let temp = sortedInAsc[j];
      sortedInAsc[j] = sortedInAsc[j + 1];
      sortedInAsc[j + 1] = temp;
    }
  }
}

// Bubble sort for descending order
for (let i = 0; i < sortedInDes.length - 1; i++) {
  for (let j = 0; j < sortedInDes.length - 1 - i; j++) {
    if (sortedInDes[j] < sortedInDes[j + 1]) {
      let temp = sortedInDes[j];
      sortedInDes[j] = sortedInDes[j + 1];
      sortedInDes[j + 1] = temp;
    }
  }
}

console.log("Sorted in ascending order:", sortedInAsc);
console.log("Sorted in descending order:", sortedInDes);

// 20. Write a ts program to sort even and odd elements of array separately.
var odd: number[] = [1, 13, 7, 5, 9, 17];
var even: number[] = [2, 16, 74, 58, 96, 170];
console.log(`Original odd array ${odd}`);
console.log(
  `This is an sorted odd array: ${odd.sort(function (a, b) {
    return a - b;
  })}`
);
console.log(`Original even array [${even}]`);

console.log(
  `This is an sorted even array: [${even.sort(function (a, b) {
    return a - b;
  })}]`
);
// 21. Write a ts program to left rotate an array.

let rotate: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let indicesToRotate: number = 2;
console.log(`Original Array:`, rotate);

for (let i = 0; i < indicesToRotate; i++) {
  let temp = rotate[0];
  for (let j = 0; j < rotate.length - 1; j++) {
    rotate[j] = rotate[j + 1];
  }
  rotate[rotate.length - 1] = temp;
}

console.log(`Rotated Array:`, rotate);

// 22. Write a ts program to right rotate an array.

let rotate2: number[] = [
  -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17,
  -18, -19, -20,
];
let indicesToRotate2: number = 2;
console.log(`Original Array:`, rotate2);

for (let i = 0; i < indicesToRotate2; i++) {
  let temp = rotate2[rotate2.length - 1];
  for (let j = rotate2.length - 1; j > 0; j--) {
    rotate2[j] = rotate2[j - 1];
  }
  rotate2[0] = temp;
}

console.log(`Rotated right Array:`, rotate2);
