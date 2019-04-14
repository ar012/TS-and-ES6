import { copyFileSync } from "fs";

export {}
let message = 'Welcome to TS';
console.log(message);

// variable declaration
// ====================
let x = 10; 
let y = 20;

const z = 45;
// const sum;
let summation;

const title = 'selftics';

// let isBeginner = true;

// let vt = typeof isBeginner;

// console.log(vt);

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'abdurrazzak';


// name = true;

let sentence: string = `My name is ${name}
I am a beginner in TypeScript`;

console.log(sentence);


//========================
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;


let list1: number[] = [1, 2, 3, 4, 5];
let list2: Array<number> = [1, 2, 3,];


let person1: [string, number] = ['name', 22]

// enum Color {Red, Green, Blue};
enum Color {Red = 5, Green, Blue};

let c: Color = Color.Green;
console.log(c);


let randomValue: any = 10;
randomValue = true;
randomValue = 'Abdur Razzak';


// let myVariable: any = 10;

// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();


let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj == "object" &&
        "name" in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}

// (myVariable as string).toUpperCase();


let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
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

function add(num1: number, num2: number = 10): number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(3, 4);

add(5);


/*
function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let man = {
    firstName: 'Rashed',
    lastName: 'Khan'
};
fullName(man)
*/


/*
interface Person {
    firstName: string;
    lastName: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Abdur',
    lastName: 'Razzak'
};
fullName(p)
*/


// Setting lastName as optional
interface Person {
    firstName: string;
    lastName?: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Abdur',
    // lastName: 'Razzak'
};
fullName(p)

// Class in Typescript
// ===================
class Employee {
    // employeeName: string;
    // public employeeName: string;
    // private employeeName: string;
    protected employeeName: string;



    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Arif');

console.log(emp1.employeeName);

emp1.greet();


class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork(){
        console.log(`Manager delegating tasks ${this.employeeName}`);
    }
}

let m1 = new Manager('Nasir Hossain');
 m1.delegateWork();
 console.log(m1.employeeName);
