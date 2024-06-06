"use strict";
var prompt1 = prompt(`Enter how many elements you want in array`);
var prompt2 = [];
for (let i = 0; i < prompt1; i++) {
    prompt2[i] = prompt(`Enter your elements`);
}
console.log(prompt2);
