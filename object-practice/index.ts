// // accessing object type
// // first method
var poet = {
  born: 1935,
  name: "Mary Oliver",
};
// // second method
console.log(poet.born);
var poet = {
  born: 1935,
  name: "Mary Oliver",
};
console.log(poet[`name`]);
// // type of object
// // first method
let poetLater: {
  born: number;
  name: string;
  age: number;
  age_is_above_than_50: boolean;
};
poetLater = {
  born: 1935,
  name: "Mary Oliver",
  age: 32,
  age_is_above_than_50: false,
};
console.log(poetLater);
// // second method
type poet = {
  firstName: string;
  lastName: string;
  age: number;
  age_is_above_than_50: boolean;
};
var hasBoth: poet = {
  firstName: "Lucille",
  lastName: `oliver`,
  age: 57,
  age_is_above_than_50: true,
};
console.log(hasBoth);
// // nested object
// // acessing nested object
type authortype1 = {
  airstname: {
    firstname: string;
    lastname: string;
    born: number;
  };
  title?: string;
};
var author2: authortype1 = {
  airstname: {
    firstname: `Ahmad`,
    lastname: `jawad`,
    born: 2009,
  },
  title: `My first book`,
};
console.log(author2.airstname.firstname);
// // using union type
// var uniontype: poet | authortype={
// age_is_above_than_50:false,
// title:

// };
// // a
