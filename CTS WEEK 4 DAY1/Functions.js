// // // Functions in JavaScript
// // Functions are reusable blocks of code that perform a specific task. They help in organizing code, improving readability, and reducing redundancy. In web development, functions are used for tasks like handling user input, making API calls, manipulating the DOM, and more.

// // 1. Function Declaration
// A function declaration defines a named function using the function keyword. These functions are hoisted, meaning they can be called before they are defined in the code.

function functionName(parameters) {
  // Function body
  return value; // Optional
}

// Imagine a web form where you need to validate a user's email address.

// Function Declaration Example
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Regular expression to validate email format
  return emailRegex.test(email);
}

// Usage
const userEmail = "pradip10bhatt@gmail.com";

if (validateEmail(userEmail)) {
  console.log("Valid email address!");
} else {
  console.log("Invalid email address!");
}

// Write a function to calculate the area of a rectangle.

function calculateArea(length, width) {
  return length * width;
}
// Example usage
const length = 5;
const width = 10;
const area = calculateArea(length, width);
console.log(`Area of the rectangle: ${area}`); // Output: Area of the rectangle: 50

// Write a function to check if a number is even or odd.
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
// Example usage
const numberToCheck = 7;
const result = isEvenOrOdd(numberToCheck);

console.log(`The number ${numberToCheck} is: ${result}`);

// Output: The number 7 is: Odd

// Write a function to convert Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
// Example usage
const celsiusTemperature = 25;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);

// Output: 25°C is equal to 77°F
