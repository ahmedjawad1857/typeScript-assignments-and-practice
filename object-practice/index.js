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
console.log(poet["name"]);
// // type of object
// // first method
var poetLater;
poetLater = {
    born: 1935,
    name: "Mary Oliver",
    age: 32,
    age_is_above_than_50: false,
};
console.log(poetLater);
var hasBoth = {
    firstName: "Lucille",
    lastName: "oliver",
    age: 57,
    age_is_above_than_50: true,
};
console.log(hasBoth);
var author2 = {
    airstname: {
        firstname: "Ahmad",
        lastname: "jawad",
        born: 2009,
    },
    title: "My first book",
};
console.log(author2.airstname.firstname);
// // using union type
// var uniontype: poet | authortype={
// age_is_above_than_50:false,
// title:
// };
// // a
