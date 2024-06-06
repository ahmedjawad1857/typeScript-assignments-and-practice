// // Q no 1: Define a type Person that represents an object with properties name (string) and age (number).
// // Create an object person1 of type Person and initialize it with a name and age.
// // Write a function getBirthYear that takes a Person object and the current year as parameters and returns the birth year.
interface Person {
  name: string;
  age: number;
}
var person1: Person = {
  name: `Ahmad`,
  age: 14,
};
var getBirthYear = (currentYear: number) => currentYear - person1.age;
var birthyear = getBirthYear(2023);

console.log(
  `${person1.name}'s birth year is ${birthyear} and now this year his age is ${person1.age}`
);
// // Q NO 2. Define a type Rectangle that represents an object with properties width (number) and height (number).
// // Add a function type CalculateAreaFn that calculates the area of the rectangle.
// // Create a variable rectangle of type Rectangle and initialize it with appropriate values for width and height.

interface Rectangle {
  height: number;
  width: number;
}
var CalculateAreaFn = () => rectangle.height * rectangle.width;
var rectangle: Rectangle = {
  height: 300,
  width: 245,
};
console.log(CalculateAreaFn());
// // Q NO 3. Define a type Color that is a union of string literal types "Red", "Green", and "Blue".
type colour = `Red` | `Green` | `blue`;
var green: colour = `Green`;
var red: colour = `Red`;
var blue: colour = `blue`;
console.log(green + ` ` + red + ` ` + blue);
// // Q NO 4. Define an object type Car with properties make (string), model (string), and year (number).
// // Add a function type StartEngineFn that logs "Engine started!" when called.
interface Car {
  make: string;
  model: string;
  year: number;
}
type StartEngineFn = () => void;

var car: Car = {
  make: `Honda`,
  model: `civic`,
  year: 2009,
};
var engine: StartEngineFn = () => console.log(`Engine started!`);
engine();
// // Q NO 5. Create an array of Person objects and use a loop to print their names and ages
type Persons = {
  name: string;
  age: number;
};

type new_Persons = [Persons, Persons, Persons];

const newPersons: new_Persons = [
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
// // Q NO 6. Define an object type Book with properties title (string), author (string), and year (number).
// // Add a function type GetBookInfoFn that returns a formatted string containing all properties.
type Book = {
  title: string;
  author: string;
  year: number;
};
var bookinfo: Book = {
  title: `Hamlet`,
  author: `William Shakespeare`,
  year: 1603,
};
type GetBookInfoFn = () => string;
var Book_info: GetBookInfoFn = () =>
  `book title: ${bookinfo.title} \nbook author: ${bookinfo.author} \nbook published year: ${bookinfo.year}`;
console.log(Book_info());
// // Q NO 7. Define an object type BankAccount with properties accountNumber (string) and balance (number).
// // Add function types DepositFn and WithdrawFn to modify the balance.
type BankAccount = {
  accountnumber: string;
  balance: number;
};
var bank_Account: BankAccount = {
  accountnumber: `pk5426532ue3920`,
  balance: 7000,
};
type DepositFn = (depositAmount: any) => void
type WithdrawFn = (Withdrawamount: any) => number;
var deposit: DepositFn = (depositAmount) => {
  var depositAmount1 = parseInt(depositAmount);
  return bank_Account.balance + depositAmount1;
};

var withdraw: WithdrawFn = (Withdrawamount) =>
  bank_Account.balance - Withdrawamount;
console.log(
  `TotaL bank balance before depositing money is Rs.${
    bank_Account.balance
  }.\nTotal bank balance after depositing money is Rs.${deposit(
    prompt(`Enter amount of money to deposit amount in your bank account`)
  )}`
);
console.log(
  `TotaL bank balance before withdrawing money is Rs.${
    bank_Account.balance
  }.\nTotal bank balance after withdrawing money is Rs.${withdraw(
    prompt(`Enter amount of money to withdraw amount from your bank account`)
  )}`
);
// // Q NO 8. Define an object type Student with properties name (string), age (number), and grades (NumberArray).
// // Add a function type CalculateAverageGradeFn that returns the average grade.
interface Student {
  name: string;
  age: number;
  grades: number[];
}
var StudentInfo: Student = {
  name: `Sheraz`,
  age: 15,
  grades: [92, 65, 92, 86, 68, 78],
};
var studentsgrades: number[] = StudentInfo.grades;
type CalculateAverageGradeFn = (total: number) => void;
var CalculateAverageGrade: CalculateAverageGradeFn = (total) => {
  var sum = studentsgrades.reduce((sum1, sum2) => sum1 + sum2);
  return Math.round((sum / total) * 100);
};
console.log(`The average grade of students is ${CalculateAverageGrade(600)}`);
// // Q NO 9. Define a type Course with properties title (string), duration (number), and teacher (string).
// // Implement a function type GetCourseInfoFn that returns a formatted string containing all properties of a Course.
interface Course {
  title: string;
  duration: number;
  teacher: string;
}
var course1: Course = {
  title: `Computer`,
  duration: 30,
  teacher: `Sir Shoaib`,
};
type GetCourseInfoFn = () => string;
var Course_info: GetBookInfoFn = () =>
  `Course title: ${course1.title} \nCourse duration: ${course1.duration}mins \nCourse teacher: ${course1.teacher}`;
console.log(Course_info());
// // Q NO 10. Create a type Product that represents an object with properties name (string) and price (number).
// // Define a function type ApplyDiscountFn that takes a Product object and a discount percentage and returns a new Product object with the discounted price.
type Product = {
  name: string;
  price: number;
};
var product: Product = {
  name: `Brown rice`,
  price: 300,
};
type ApplyDiscountFn = (discount: number) => number;
var discounted: ApplyDiscountFn = (discount) => {
  var b: number = (discount / 100) * product.price;
  return product.price - b;
};
console.log(
  `The product(${product.name})'s Original price is ${
    product.price
  } after 20% discount it's price is ${discounted(20)}`
);

// // Q NO 11. Define a type Employee with properties name (string), position (string), and salary (number).
// // Implement a function type GetAnnualSalaryFn that calculates the annual salary of an Employee
interface Employee {
  name: string;
  position: string;
  salary: number;
}
var employeeinfo: Employee = {
  name: `Sheraz`,
  position: `Super Visor`,
  salary: 100000,
};
type GetAnnualSalaryFn = (annual: number) => number;
var annualSalary: GetAnnualSalaryFn = (annual) => employeeinfo.salary * annual;
console.log(
  `${employeeinfo.name} position is ${
    employeeinfo.position
  } and his salary is ${annualSalary(12)}`
);
