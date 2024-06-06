"use strict";
var person1 = {
    name: `Ahmad`,
    age: 14,
};
var getBirthYear = (currentYear) => currentYear - person1.age;
var birthyear = getBirthYear(2023);
console.log(`${person1.name}'s birth year is ${birthyear} and now this year his age is ${person1.age}`);
var CalculateAreaFn = () => rectangle.height * rectangle.width;
var rectangle = {
    height: 300,
    width: 245,
};
console.log(CalculateAreaFn());
var green = `Green`;
var red = `Red`;
var blue = `blue`;
console.log(green + ` ` + red + ` ` + blue);
var car = {
    make: `Honda`,
    model: `civic`,
    year: 2009,
};
var engine = () => console.log(`Engine started!`);
engine();
const newPersons = [
    {
        name: "Ahmad",
        age: 13,
    },
    {
        name: "Sheraz",
        age: 15,
    },
    {
        name: "Azaan",
        age: 14,
    },
];
for (let i = 0; i < newPersons.length; i++) {
    console.log(`name:`, newPersons[i].name, `\nage:`, newPersons[i].age);
}
var bookinfo = {
    title: `Hamlet`,
    author: `William Shakespeare`,
    year: 1603,
};
var Book_info = () => `book title: ${bookinfo.title} \nbook author: ${bookinfo.author} \nbook published year: ${bookinfo.year}`;
console.log(Book_info());
var bank_Account = {
    accountnumber: `pk5426532ue3920`,
    balance: 7000,
};
var deposit = (depositAmount) => {
    var depositAmount1 = parseInt(depositAmount);
    return bank_Account.balance + depositAmount1;
};
var withdraw = (Withdrawamount) => bank_Account.balance - Withdrawamount;
console.log(`TotaL bank balance before depositing money is Rs.${bank_Account.balance}.\nTotal bank balance after depositing money is Rs.${deposit(prompt(`Enter amount of money to deposit amount in your bank account`))}`);
console.log(`TotaL bank balance before withdrawing money is Rs.${bank_Account.balance}.\nTotal bank balance after withdrawing money is Rs.${withdraw(prompt(`Enter amount of money to withdraw amount from your bank account`))}`);
var StudentInfo = {
    name: `Sheraz`,
    age: 15,
    grades: [92, 65, 92, 86, 68, 78],
};
var studentsgrades = StudentInfo.grades;
var CalculateAverageGrade = (total) => {
    var sum = studentsgrades.reduce((sum1, sum2) => sum1 + sum2);
    return Math.round((sum / total) * 100);
};
console.log(`The average grade of students is ${CalculateAverageGrade(600)}`);
var course1 = {
    title: `Computer`,
    duration: 30,
    teacher: `Sir Shoaib`,
};
var Course_info = () => `Course title: ${course1.title} \nCourse duration: ${course1.duration}mins \nCourse teacher: ${course1.teacher}`;
console.log(Course_info());
var product = {
    name: `Brown rice`,
    price: 300,
};
var discounted = (discount) => {
    var b = (discount / 100) * product.price;
    return product.price - b;
};
console.log(`The product(${product.name})'s Original price is ${product.price} after 20% discount it's price is ${discounted(20)}`);
var employeeinfo = {
    name: `Sheraz`,
    position: `Super Visor`,
    salary: 100000,
};
var annualSalary = (annual) => employeeinfo.salary * annual;
console.log(`${employeeinfo.name} position is ${employeeinfo.position} and his salary is ${annualSalary(12)}`);
