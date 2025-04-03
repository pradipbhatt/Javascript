// 2. Function Expressions
// A function expression defines a function as part of an expression. These functions are not hoisted, so they cannot be called before they are defined.

const functionName = function (parameters) {
  // Function body
  return value; // Optional
};

//  Real-Life Example
// Imagine a button on a webpage that, when clicked, displays an alert.

// Function Expression Example
// const showAlert = function(message) {
//     alert(message);
// };

// Usage
// document.getElementById("myButton").addEventListener("click", function() {
//     showAlert("Button clicked!");
// });

// practise questions
// 1. Write a function to calculate the factorial of a number.
// 2. Write a function to reverse a string.
// 3. Write a function to find the maximum number in an array.

// 3. Arrow Functions
// Arrow functions are a concise way to write functions introduced in ES6. They do not have their own this context, making them ideal for use in callbacks and functional programming.

// Arrow functions were introduced in ES6 (ECMAScript 2015)

function Person(name) {
  this.name = name;

  setTimeout(() => {
    console.log(this.name); // "Alice", because `this` is inherited from the surrounding lexical context
  }, 1000);
}

let person = new Person("Alice");

//   Output: "Alice" after 1 second

// Benifits of using arrow function
// 1. Concise Syntax: Arrow functions have a shorter syntax compared to traditional function expressions.
// 2. Lexical this: Arrow functions do not have their own this context, making them ideal for use in callbacks and functional programming.
// 3. No arguments object: Arrow functions do not have their own arguments object, which can help avoid confusion in some cases.
// 4. Implicit return: If the function body consists of a single expression, you can omit the curly braces and the return keyword.
// 5. No binding of this: Arrow functions do not bind their own this, which can help avoid issues with the context of this in certain scenarios.
// 6. Cleaner code: Arrow functions can lead to cleaner and more readable code, especially in functional programming paradigms.

// Example of Normal Function
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3)); // Output: 5

//   Example of Arrow Function
const addArrow = (a, b) => {
  a + b;
};
console.log(add(2, 3)); // Output: 5

// Real-Life Example
// Imagine fetching data from an API and logging the response.

// Arrow Function Example
const fetchData = async (url) => {
  try {
    console.log("Fetching data...");
    // Simulating an API call
    // In a real scenario, you would use fetch or axios to make the API call.fetch is a built-in JavaScript function that allows you to make HTTP requests.
    
    const response = await fetch(url);


    const data = await response.json();
    // resonse.json() returns a promise, so we need to await it it coversts 
    console.log(data);
    console.log("let's see the non json data as well");
    console.log(response);
    
    
    console.log("Iam executed only after fetching complete Data fetched successfully!");
    
  } 
  
  
  catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Usage
fetchData("https://jsonplaceholder.typicode.com/posts");


// Practice Code
// Write an arrow function to calculate the factorial of a number.
// Write an arrow function to filter an array of numbers greater than a given value.

