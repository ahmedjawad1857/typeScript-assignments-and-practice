"use strict";
var section = prompt(`Enter your section`);
var upperCase = section.toUpperCase() || section1;
console.log(upperCase);
switch (upperCase) {
    case `A`:
        console.log(`switch-Your school timing is 8AM-10AM`);
        break;
    case `B`:
        console.log(`switch-Your school timing is 10AM-12PM`);
        break;
    case `C`:
        console.log(`switch-Your school timing is 12PM-2PM`);
        break;
    default:
        console.error(`switch-this section is invalid`);
        break;
}
var section1 = prompt(`Enter your section`);
var upperCase1 = section1.toUpperCase() || section1;
if (upperCase1 == `A`) {
    console.log(`if-Your school timing is 8AM-10AM`);
}
else if (upperCase1 == `B`) {
    console.log(`if-Your school timing is 10AM-12PM`);
}
else if (upperCase1 == `C`) {
    console.log(`if-Your school timing is 12PM-2PM`);
}
else {
    console.error(`if-this section is invalid`);
}
