"use strict";
var city = [`Faisalabad`, `Lahore`, `Karachi`, `Islamabad`];
var b = city.map((arrayItem, index, array) => {
    return array;
});
console.log(b);
var nunbers = [1, 4, 73, 55, 6, 7];
var c = nunbers.map((item, i, Array) => item + 7);
console.log(c);
var b2 = [17, 9, 5, 6, 8, 4, 3];
var d = b2.map((a, i, c) => {
    if (a % 2 == 0) {
        return a;
    }
});
console.log(d);
var r = [17, 9, 5, 6, 8, 4, 3];
var e = r.map((item, i, c) => {
    if (item % 2 !== 0) {
        return item;
    }
});
console.log(e);
var b2 = [17, 9, 5, 6, 8, 4, 3];
var d = b2.map((a, i, c) => {
    if (i % 2 == 0) {
        return i;
    }
});
console.log(d);
var r = [17, 9, 5, 6, 8, 4, 3];
var e = r.map((item, i, c) => {
    if (i % 2 !== 0) {
        return i;
    }
});
console.log(e);
var GreetedWords = [`hello`, `hi`, `How are you`];
var hello = GreetedWords.map((ahmad, sheraz, shoaib) => {
    return sheraz;
});
console.log(hello);
console.log();
