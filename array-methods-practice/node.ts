var car: string[] = [`toyota`, `volvo`, `mercedes`, `bugatti`, `mercedes`];
var person: string[] = [`rizwan`, `shoaib`, `ahmad`, `sheraz`];
console.log(`this is the example of concat method`, car.concat(person));
console.log(`this is the example of indexof method`, person.indexOf(`sheraz`));
console.log(`this is the example of join method`, car.join());
console.log(
  `this is the example of lastindexof method`,
  car.lastIndexOf(`mercedes`)
);
var person1: string | undefined = person.pop();
var car1: number = car.push(`saab`);
var car2: string | undefined = car.shift();
var person2: number = person.unshift(`subhan`);
console.log(`this is the example of pop method`, person);
console.log(`this is the example of push method`, car);
console.log(`this is the example of reverse method`, car.reverse());
console.log(`this is the example of shift method`, car);
console.log(`this is the example of unshift method`, person);
console.log(`this is the example of slice method`, car.slice(0, 2));
var person3: string[] = person.splice(1, 1, `murtaza`);

console.log(`this is the example of splice method`, person);
console.log(`this is the example of sort method`, person.sort());
console.log(`this is the example of tostring method`, car.toString());
var car: string[] = [`toyota`, `volvo`, `mercedes`, `bugatti`, `mercedes`];
var person: string[] = [`rizwan`, `shoaib`, `ahmad`, `sheraz`];
console.log(`this is the example of concat method`, car.concat(person));
console.log(`this is the example of indexof method`, person.indexOf(`sheraz`));
console.log(`this is the example of join method`, car.join(`,`));
console.log(
  `this is the example of lastindexof method`,
  car.lastIndexOf(`mercedes`)
);
var person1: string | undefined = person.pop();
var car1: number = car.push(`saab`);
var car2: string | undefined = car.shift();
var person2: number = person.unshift(`subhan`);
console.log(`this is the example of pop method`, person);
console.log(`this is the example of push method`, car);
console.log(`this is the example of reverse method`, car.reverse());
console.log(`this is the example of shift method`, car);
console.log(`this is the example of unshift method`, person);
console.log(`this is the example of slice method`, car.slice(0, 2));
var person3: string[] = person.splice(1, 1, `murtaza`);

console.log(`this is the example of splice method`, person);
console.log(`this is the example of sort method`, person.sort());
console.log(`this is the example of tostring method`, car.toString());
console.log(`This is a practice of number in array `);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var number: number[] = [9, 8, 77, 0, 5, 6, 77];
var one: number[] = [93, 5, 7, 5, 2, 5, 666, 60];
console.log(`this is the example of concat method`, number.concat(one));
console.log(`this is the example of indexof method`, one.indexOf(5));
console.log(`this is the example of join method`, number.join(`,`));
console.log(
  `this is the example of lastindexof method`,
  number.lastIndexOf(77)
);
var one1: number | undefined = one.pop();
var number1: number = number.push(90);
var number2: number | undefined = number.shift();
var one2: number = one.unshift(99);
console.log(`this is the example of pop method`, one);
console.log(`this is the example of push method`, number);
console.log(`this is the example of reverse method`, number.reverse());
console.log(`this is the example of shift method`, number);
console.log(`this is the example of unshift method`, one);
console.log(`this is the example of slice method`, number.slice(0, 2));
var one3: number[] = one.splice(1, 1, 56);

console.log(`this is the example of splice method`, one);
console.log(`this is the example of sort method`, one.sort());
console.log(`this is the example of tostring method`, number.toString());
