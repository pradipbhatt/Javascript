// 1. Variables in JavaScript
// What are Variables?
// Variables are like storage containers that hold values. You can store and change values in variables. In JavaScript, there are three primary ways to declare variables: var, let, and const.

// 1.1 var
// var is the old way of declaring variables in JavaScript. It is function-scoped or globally-scoped depending on where you declare it.
// A variable declared with var can be re-declared and updated.
var x = 10;      // Declaring and initializing x
console.log(x);   // Output: 10
x = 20;           // Updating the value of x
console.log(x);   // Output: 20



// Key Points:
// Re-declaration is allowed.
// Can be updated.





// 1.2 let
// let is a more modern way of declaring variables. It is block-scoped, which means it is only available within the block (enclosed by curly braces {}) where it was defined.
// A variable declared with let cannot be re-declared in the same scope, but it can be updated.
let y = 15;      // Declaring and initializing y
console.log(y);   // Output: 15
y = 25;           // Updating the value of y
console.log(y);   // Output: 25




// Key Points:
// Cannot be re-declared in the same block.
// Can be updated.





// 1.3 const
// const is used to declare variables whose value cannot be changed after it is assigned. It is also block-scoped like let.
// You cannot re-declare or update the value of a constant once it’s assigned.
const z = 30;     // Declaring and initializing z
console.log(z);    // Output: 30
// z = 40;         // Error: Assignment to constant variable




// Key Points:
// Cannot be updated.
// Cannot be re-declared.
