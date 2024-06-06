interface Poet {
  name: string;
  classes: string[];
  age: number;
  address: string;
}

let user1: Poet = {
  name: "Ahmad",
  classes: ["class1", "class2", "class3"],
  age: 20,
  address: "Faisalabad",
};

let user2: Poet = {
  name: "Sheraz",
  classes: ["class1", "class2", "class3"],
  age: 20,
  address: "Faisalabad",
};

type Hello = "string" | "hello";

let user3: Hello = "hello";
let user4: Hello = "string";
let user5: Hello = "qijiejoi" // error
