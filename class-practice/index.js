// class car {
//   private model: string;
//   year: number;
//   constructor(model: string, year: number) {
//     this.model = model;
//     this.year = year;
//   }
//   info(coffee: any) {
//     var info1 = parseInt(coffee);
//     console.log(`${info1} cups of cofee I need.`);
//   }
//   company: string = "Toyota";
// }
// var my_car = new car(`corolla`, 2023);
// console.log(my_car);
// class Encapsulate
// {
// public str:string="hello"
// private str2:string="world"
// }
// var obj=new Encapsulate()
// console.log(obj.str)
// // var shoaibCar = new car("yaris", 2023);
// // // console.log(shoaibCar);
// // class newModelCar extends car {
// //   lightcolour: string;
// //   constructor(lightcolour: string, model: string, year: number) {
// //     super(model, year);
// //     this.lightcolour = lightcolour;
// //   }
// // }
// // var mycar: any = new newModelCar(`yellow`, `civic`, 2004);
// // console.log(mycar);
// // my_car.info(prompt(`Enter a number`));
// // class helloworld {
// //   name: string;
// //   constructor(name: string) {
// //     this.name = name;
// //   }
// // }
// // var a = new helloworld(`hello`);
// // class bikes {
// //   name: string;
// //   year: number;
// //   constructor(name: string, year: number) {
// //     this.name = name;
// //     this.year = year;
// //   }
// //   info(coffee: any): void {
// //     console.log(`${coffee} cups of cofee I need.`);
// //   }
// // }
// // var bike1 = new bikes(`honda`, 2023);
// // console.log(bike1);
// // class newBike extends bikes {
// //   model: string;
// //   constructor(name: string, year: number, model: string) {
// //     super(name, year);
// //     this.model = model;
// //   }
// // }
// // var newbike = new newBike(`Honda`, 2016, `prider`);
// // console.log(newbike);
// // newbike.info(9);
// class display_word {
//   display(): void {
//     console.log(`My name is ahmad`);
//   }
// }
// class new_display_word extends display_word {
//   // display(): void {
//   name: string;
//   constructor(name: string) {
//     super();
//     this.name = name;
//   }
//   // console.log(`My class is Eight`);
//   // }
// }
// var f = new new_display_word(`Ahmad`);
// f.display();
// // // Static keyword
// class example {
//   static name1: string = `AHMAD`;
//   static get() {}
// }
// console.log(example.name1);
// console.log(example.name1);
// console.log(example.name1);
// console.log(example.name1);
// console.log(example.name1);
// console.log(example.name1);
// console.log(example.name1);
// console.log(example.name1);
// console.log(example.name1);
// console.log(example.name1);
// class honda {
//   h: number;
//   constructor(h: number) {
//     this.h = h;
//   }
// }
// console.log(example.name1);
// class MyClass {
//   static staticProperty: string = "I am a static property";
//   static staticMethod(): void {
//     console.log("This is a static method");
//   }
// }
// const myInstance = new MyClass();
// console.log(MyClass.staticProperty); // Accessing static property directly from the class
// MyClass.staticMethod(); // Calling static method directly from the class
// class MyClass {
//   // class definition
// }
// class MyClass1 {
//   // class definition
// }
// const obj = new MyClass();
// var f = obj instanceof MyClass1;
// console.log(f);
// if (obj instanceof MyClass1) {
//   console.log(`obj is an instancof Myclass`);
// }
// else{
//   console.log(`obj is not an instance of Myclass`);
// }
// interface type1 {
//   name1: string;
//   name2: string;
//   name3: string;
// }
// class type2 implements type1 {
//   constructor(name1: string, name2: string, name3: string) {
//     this.name2 = name2;
//     this.name3 = name3;
//     this.name1 = name1;
//   }
//   name1: string;
//   name2: string;
//   name3: string;
// }
// var a = new type2(`Ahmad`, `Sheraz`, `Rizwan`);
// console.log(a);
// class city {
//     name: string
//     population: number
//     constructor(name: string, population: number) {
//         this.name = name
//         this.population = population
//     }
//     static country() {
//         console.log("country is Pakistan");
//     }
// }
// city.country()
var cities = /** @class */ (function () {
    function cities(name, population) {
        this.name = name;
        this.population = population;
        cities.country = this.name;
    }
    //   static country():string {
    //     return `Country is pakistan`;
    //   }
    cities.country = "pakistan";
    return cities;
}());
var obj = {
    name: "ahmad",
    class: "eight",
    age: 13,
};
console.log(obj);
var a = /** @class */ (function () {
    function a(name, age, Class) {
        this.Class = Class;
        this.age = age;
        this.name = name;
    }
    return a;
}());
var b = new a("Ahmad", 13, 8);
console.log(b);
var obj1 = {
    name: "ahmad",
    class: "eight",
    age: 13,
};
console.log(obj1);
