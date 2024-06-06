"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.export1 = void 0;
// class students {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// export default students;
var export1 = function (table) {
    for (var i = 1; i < 10; i++) {
        console.log("".concat(table, " x ").concat(i, " = ").concat(table * i));
    }
};
exports.export1 = export1;
