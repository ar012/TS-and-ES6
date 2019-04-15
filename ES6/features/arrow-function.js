// js function

function a() {
    console.log('Hello Arrow Function')
}

a()

const print = () => {
    console.log('Welcome to learn Arrow function')
}

print()

const output = (name) => {
    console.log('Verry Good!', name);
}

output("Nasir")

const output2 = name => {
    console.log('Verry Good!', name);
}

output2("Rayhan")


const addMe = (a, b) => {
    return a+b;
}

console.log(addMe(2, 5))


const sub = (a, b) => a - b;
console.log(sub(10, 5));

const sqr = x => x*x;
console.log(sqr(10));

function sqrt(x) {
    return x*x;
}
console.log(sqrt(9))