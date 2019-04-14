console.log("Hello viewer! welcome to ES6");

// const a = 10;
// const b = 20;

// const sum = (a, b) => a+b;

// console.log(sum(a, b));


// const x = 10;
// // x = 25;
// console.log(x);


// const arr = [];
// arr.push(10);
// arr.push(20);

// console.log(arr);


// var a = 10;

// if (true) {
//     var a = 100;
//     console.log(a);
// }

// console.log(a);


// let a = 20;
// if (true) {
//     let a = 200;
//     console.log(a);
// }

// console.log(a);

// function demo() {
//     {
//         let x = 10;
//         // var x = 10;
//         {
//             const x = 15;
//             console.log(x);
//             // x = 20;
//         }

//     }
//     console.log(x);

// }

// demo()


// const name = 'abdur razzak'
// const email = 'a.razzak660@gmail.com'
// const div = 'rajshahi'

// const details = 'Name: ' + name + ' email: ' + email
//                 + ' division: ' + div

// // Template string
// const details = `
//     Name: ${name}
//     Email: ${email}
//     Divivsion: ${div}
// `
// console.log(details);
// console.log("I am updating javascript code.");

// alert("Webpack is Awesome!!!");

//===============
// Arrow function
//===============

// function print() {
//     console.log(2+3);
// }

// const print = (name) => {
//     console.log("If you risk nothing then you risk everything!", name);
// }


/*
const print = name => {
    console.log("If you risk nothing then you risk everything!", name);
}

print("AR")
*/



// const addMe = (a, b) => {
//     return a + b;
// }

// const addMe = (a, b) => a + b;
// console.log(addMe(500, 150));

// const sqr = x => x*x

// // const sqr = function(x) {
// //     return x*x;
// // }
// console.log(sqr(32));



// Lexical this
//=============

// const obj = {
//     name: 'selftics',
//     print: function() {
//         setTimeout(function() {
//             console.log(this.name);
//         }.bind(this), 1000);
//     }
// }

// obj.print();


// const obj2 = {
//     name: 'selftics.net',
//     print: function() {
//         setTimeout(() => {
//             console.log(this.name);
//         }, 1000);
//     }
// }

// obj2.print();



//==================================
// Enhanced Object and Destructuring
//==================================

/*

// Enhanced Object
let name = 'selftics';

let email = 'ar@selftics.net';

const self = {
    name,
    email,
    print() {
        console.log(this.name, this.email);
    }
}

self.print();

console.dir(self);

*/



// Destructuring Array
//====================

// const arr = [20, 30, 40];

// let [a, , c] = arr;

// console.log(a);

// // console.log(b);

// console.log(c);



//=====================
// Destructuring Object
// ====================

/*
const obj = {
    name: 'manik',
    email: 'manik@gmail.com'
}

// // Old process:
// var name = obj.name;
// var email = obj.email;
// console.log(name, email);

let { name, email } = obj;
console.log(name, email);



function print(name, email) {
    console.log(`Hello ${name}; Email: ${email}`);
}

print(name, email);

print(email, name);



// function print({name: name, email: email}){
//     console.log(`Hello ${name}; Email: ${email}`);
// }


function print({name, email}){
    console.log(`Hello ${name}; Email: ${email}`);
}

print({name, email});

print({email, name});
*/



// Default Parameter
//==================

// let add = (a, b) => a+b;

// console.log(add(10, 12));
// console.log(add(10));


// let sqr = (a=1, b=a) => a*b;
// console.log(sqr(10));
// console.log(sqr(5,6));





// Rest Operator
//==============

// function sum(...num){
//     console.log(num);
// }
// sum(10, 20, 30);


/*
function sum(...num){
    return num.reduce((a,b) => a+b);
}
let total = sum(1, 2, 3, 4, 5, 10)
console.log(total);
*/

/*
//Spread Operator
//===============
var arr = [1,2,3,4,5];

console.log(arr);

console.log(...arr);

var arr2 = [...arr, 6, 7, 8, 10];

console.log(arr2);


var obj = {
    name: 'AR',
    address: 'Rajshahi',
    phone: +8801723090660
}

var obj2 = {
    ...obj,
    email: 'arr@selftics.com',
    company: 'cts'
}

// console.log(obj);
console.log(obj2);

*/


/*
// Module
//=======
// import * as math from './math';

// console.log(math.add(10, 20));

import { add, mod } from './math';

console.log(add);
console.log(mod);

console.log(add(10, 5));

console.log(mod(10, 4));
*/

/*
//Classes 
//=======
import Person from './person'

let p1 = new Person('MD Arif', 'arif@gmail.com');

console.log(p1.name);
p1.print();
*/


/*
//Inheritance
//===========
import Student from './student'

let st1 = new Student('Rashed khan', 'rashed@gmail.com', '123');

st1.welcome();

*/



/*
// Asynchronous example
//===================== 
console.log('Hello');

setTimeout(() => {
    console.log('I am in Timer');
}, 5000)

console.log('I am third');

setTimeout(() => {
    console.log('I am fourth')
}, 2000);

*/

/*
// Promise
//========
let myFirstPromise = new Promise((resolve, reject) => {
    let name = 'Selftics';
    resolve(name);
})

console.log(myFirstPromise);
*/


/*
// Asynchronous 
// ============
console.log("hello");

setTimeout(() => {
    console.log('I am in Timer');
    
}, 3000)

console.log('I am third');

setTimeout ( () => {
    console.log('I am fourth');
}, 100);

*/



/*
// Promise
// =======
let myFirstPromise = new Promise((resolve, reject) => {
    let name = 'Selftics';
    setTimeout(() => resolve(name), 3000);
});

myFirstPromise
    .then((name) => {
        console.log('We are ' + name);
    })



*/


// let data = fetch('https://jsonplaceholder.typicode.com/users');
// console.log(data);

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((body)=> {
        body.map(data => console.log(data.name));
    })
    .catch((err) => console.log(err))