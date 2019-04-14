// var a = 10;

// if (true){
//   let a = 40;
//   console.log(a);

// }

// console.log(a);


// if (true){
//   var a = 40;
//   console.log(a);

// }

// console.log(a);

// let a = 50;
// let b = 100;

// if (true) {
//   let a = 60;
//   var c = 10;
//   console.log(a/c);
//   console.log(b/c);
// }

// console.log(c);
// console.log(a);


// const d = 50;

// const e = "Constant variable";

// // e = "Assigning new value";


// const LANGUAGES = ['Js', 'Ruby', 'Python', 'Go'];

// // LANGUAGES = "Javascript";
// LANGUAGES.push('Java');
// console.log(LANGUAGES);


var x = 1;

function doSomething() {
  for (var x = 0; x < 5; x++) { 
     // Technically, x should only be scoped to this block because this is 
     // where we have defined x. 
  }

  // But it turns out that x is available here as well! 
  console.log(x); // 5 
}


doSomething();

// var x = 1; 
// console.log(window.x); // 1

const z = 3.14;
z = 2;

let z = 10;