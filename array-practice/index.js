"use strict";
var practice = [
    { Firstname: `Ahmad`, Lastname: `Jawad` },
    { Firstname: `sheraz`, Lastname: `Irshad` },
];
var Firstname = practice.map((value) => value.Firstname + value.Lastname);
console.log(Firstname);
var practice = [
    { Firstname: `Ahmad`, Lastname: `Jawad` },
    { Firstname: `sheraz`, Lastname: `Irshad` },
];
var Firstname = practice.forEach((value) => console.log(value.Firstname + value.Lastname));
var practice1 = [6, 90, 6, 43, 2, 3, 689, 9, 5, 5, 2, 1];
var all = practice1.every((value) => value >= 18);
console.log(`All over 18 is`, all);
var practice1 = [6, 90, 6, 43, 2, 3, 689, 9, 5, 5, 2, 1];
var y = practice1.filter((value) => value % 2 == 0);
console.log(` Even Array`, y);
var practice1 = [6, 90, 6, 43, 2, 3, 689, 9, 5, 5, 2, 1];
var z = practice1.some((value) => value % 2 == 0);
console.log(` Some of the array is even`, z);
var practice1 = [6, 90, 6, 43, 2, 3, 689, 9, 5, 5, 2, 1];
var x = practice1.reduce((value, item) => value + item);
console.log(` some of arrays all value is`, x);
var practice1 = [6, 90, 6, 43, 2, 3, 689, 9, 5, 5, 2, 1];
var a = practice1.reduceRight((value, item) => value + item);
console.log(` Some of the array is even`, a);
