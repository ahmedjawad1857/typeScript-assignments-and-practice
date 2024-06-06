// // 1. Make an array of numbers that are doubles of the first array
// var doubles: number[] = [1, 9, 7, 6, 98, 9, 34];
// var doubleArray = doubles.map((arrayitem, index, array) => arrayitem * 2);
// console.log(`Original Array: `,doubles);
// console.log(`Double Array: `,doubleArray);
// // 2. Take an array of numbers and make them strings
// var tostring: number[] = [27, 6, 4, 2, 8, 9, 45];
// var numbertostring = tostring.map((item, index, array) => item.toString());
// console.log(numbertostring);
// // 3. Capitalize each of an array of names
// var names: string[] = [`ahMad`, `jaWad`, `sHeraz`, `irshad`];
// var touppercase = names.map((item, index, array) => item.toUpperCase());
// console.log(`Original Array: `,names);
// console.log(`converted Array to upper case: `,touppercase);
// // 4. Given an array of numbers, use .map() to calculate the square of each number and return a new array.
// var square: number[] = [1, 7, 5, 4, 3, 2, 8, 3, 9, 5, 4, 2];
// var squareOfNumber = square.map((item, index, array) => item * item);
// console.log(`Square of ${square} :` , squareOfNumber);
// // 5. Convert an array of strings to an array of uppercase strings using the .map() method.
// var names: string[] = [`ahmad`, `Rizwan`, `sheraz`, `Shoaib`];
// var touppercase = names.map((item, index, array) => item.toUpperCase());
// console.log(`Original Array: `, names);
// console.log(`converted Array to upper case: `, touppercase);

// // 6.Transform an array of temperatures in Celsius to Fahrenheit using the formula (Celsius * 9/5) + 32.
// var degree: number[] = [1, 5, 4, 8, 285, 677, 9, 54];
// var celtofar = degree.map((item, index, array) => (item * 9) / 5 + 32);
// console.log(celtofar);
// // 7. Use the .map() method to extract the lengths of strings from an array of strings and return a new array.
// var lengths: string[] = [`chair`, `table`, `pakistan`, `india`];
// var extract_lengths = lengths.map((item, index, array) => item.length);
// console.log(`the length of each string an array :`, extract_lengths);
// // 8. Convert an array of objects with name properties to an array containing only the names, using the .map() method.
// var names: any = [
//   { name: `Ahmad`, Age: 13 },
//   { name: `sheraz`, age: 15 },
//   { name: `shoaib`, Age: 14 },
// ];
// var namesproperty = names.map((items: any) => items.name);
// console.log(namesproperty);
// // 9. Given an array of objects with title and author properties, create an array of strings in the format "Title by Author" using .map().
// //Don Quixote. By Miguel de Cervantes. ...
// // Lord of the Rings. By J.R.R. Tolkien. ...
// // Harry Potter and the Sorcerer's Stone. By J.K. Rowling. ...
// //And Then There Were None. By Agatha Christie. ...
/// //Alice's Adventures in Wonderland. By Lewis Carroll. ...
// var title: any = [
//   { title: `Don Quixote`, author: ` Miguel de Cervantes` },
//   { title: `Lord of the Rings`, author: `J.R.R. Tolkien` },
//   { title: `And Then There Were None`, author: `Agatha Christie` },
// ];
// var author = title.map(
//   (items: any) => `The book ` + items.title + ` was  written by` + items.author
// );
// console.log(author);
// // 10. Convert an array of objects with firstName and lastName properties to an array of full names using the .map() method
// var firstName: any = [
//   { firstname: `Ahmad`, lastname: `Jawad` },
//   { firstname: `sheraz`, lastname: `irshad` },
//   { firstname: `shoaib`, lastname: `Masood` },yy
// ];
// var fullname = firstName.map(
//   (items: any) => items.firstname + ` ` + items.lastname
// );
// console.log( fullname);
// // 11. Use the .map() method to capitalize the first letter of each word in an array of strings.
// var capitalizeFirst: string[] = [`chair`, `table`, `pakistan`, `india`];
// var capitalizeFirstLetter: any = capitalizeFirst.map(
//   (items) => items[0].toUpperCase() + items.charAt(0)
// );
// console.log(capitalizeFirstLetter);
// // 12. Given an array of objects with quantity and price properties, create an array of total costs (quantity * price) using .map()
// var price: any = [
//   {
//     item: `Rice`,
//     price: 300,
//     quantity: 500,
//   },
//   {
//     item: `Oil`,
//     price: 500,
//     quantity: 900,
//   },
//   {
//     item: `Flour`,
//     price: 800,
//     quantity: 1500,
//   },
// ];
// var totalCost = price.map(
//   (items: any, index: any, array: any) => items.price * items.quantity
// );
// console.log(
//   `Total Cost of [500 gram Rice ,900 gram oil ,1500 gram flour]  is`,
//   totalCost
// );
