let globalVar = "I am global"; // Global variable

function example() {
    let localVar = "I am local"; // Local variable
    console.log(globalVar); // ✅ Accessible (global scope)
    console.log(localVar);  // ✅ Accessible (local scope)
}

example();


// console.log(localvar);  this cause the error
function exampleFunc() {
    var a = 10; // Function-scoped
    if (true) {
        let b = 20; // Block-scoped
        const c = 30; // Block-scoped
    }
    console.log(a); // ✅ Works because 'a' is function-scoped
    // console.log(b); // ❌ Error because 'b' is block-scoped
    // console.log(c); // ❌ Error because 'c' is block-scoped
}

exampleFunc();



hello(); // ✅ Works because function declarations are hoisted

function hello() {
    console.log("Hello!");
}



console.log(x); // Output: undefined (hoisted, but not initialized)
var x = 10;
