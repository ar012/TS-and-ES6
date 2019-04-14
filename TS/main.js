"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome to TS';
console.log(message);
// variable declaration
// ====================
var x = 10;
var y = 20;
var z = 45;
// const sum;
var summation;
var title = 'selftics';
// let isBeginner = true;
// let vt = typeof isBeginner;
// console.log(vt);
var isBeginner = true;
var total = 0;
var name = 'abdurrazzak';
// name = true;
var sentence = "My name is " + name + "\nI am a beginner in TypeScript";
console.log(sentence);
//========================
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3,];
var person1 = ['name', 22];
// enum Color {Red, Green, Blue};
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Abdur Razzak';
// let myVariable: any = 10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj == "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
anyType = 'Selftics.net';
// Typescript function
// ===================
// function add(num1, num2) {
//     return num1 + num2;
// }
// add(10, 12);
// add(4, "math");
// add('hello', ' world');
/*
function add(num1: number, num2: number) {
    return num1 + num2;
}
add(3, 4);
// add(4, '5')
*/
/*
function add(num1: number, num2: number): number {
    return num1 + num2;
}
add(3, 4);
// add(4, '5')
*/
/*
function add(num1: number, num2?: number): number {
    return num1 + num2;
}
add(3, 4);

add(5);

*/
/*
// Optional parameter
// ==================
function add(num1: number, num2?: number): number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(3, 4);

add(5);

*/
// default parameter
// =================
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(3, 4);
add(5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Abdur'
};
fullName(p);
// Class in Typescript
// ===================
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Arif');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks " + this.employeeName);
    };
    return Manager;
}(Employee));
var m1 = new Manager('Nasir Hossain');
m1.delegateWork();
console.log(m1.employeeName);
