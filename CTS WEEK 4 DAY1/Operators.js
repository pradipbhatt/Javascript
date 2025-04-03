// JavaScript Operators - Theory and Practice Examples

// Operators in JavaScript are used to perform operations on variables and values. 
// They are categorized into different types based on their functionality. 
// Below is a brief explanation of the most commonly used operators along with real-life relatable examples.

// 1. Arithmetic Operators:
// These are used to perform basic mathematical operations like addition, subtraction, multiplication, etc.
// Example: +, -, *, /, %, **

// Real-life example: Calculating the total price of items in a shopping cart.
let itemPrice = 50; // Price of one item
let quantity = 3; // Number of items
let totalPrice = itemPrice * quantity; // Multiplication operator
console.log("Total Price:", totalPrice); // Output: Total Price: 150



// 2. Assignment Operators:
// These are used to assign values to variables.
// Example: =, +=, -=, *=, /=

// Real-life example: Updating the score in a game.
let score = 0; // Initial score
console.log("Initial Score:", score); // Output: Initial Score: 0
score =score+10; // Adding 10 points to the score
console.log("Updated Score:", score); // Output: Updated Score: 10









// 3. Comparison Operators:
// These are used to compare two values and return a boolean result (true or false).
// Example: ==, ===, !=, !==, >, <, >=, <=

// Real-life example: Checking if a user is eligible for a discount.
let userAge = 25;
let isEligibleForDiscount = userAge >= 18; // Checking if the user is 18 or older
console.log("Eligible for Discount:", isEligibleForDiscount); // Output: Eligible for Discount: true



// Note: Use === for strict equality check (checks both value and type).


// Example: 5 === "5" returns false, but 5 == "5" returns true.


// Example: Checking if two variables are equal.
let a = 5;
let b = "5";
let isEqual = (a === b); // Strict equality check
console.log("Are a and b equal?", isEqual); // Output: Are a and b equal? false
// Example: Checking if two variables are not equal.


let c = 10;
let d = 20;
let isNotEqual = (c !== d); // Strict inequality check      
console.log("Are c and d not equal?", isNotEqual); // Output: Are c and d not equal? true




// Example: Checking if a variable is greater than or equal to another.
let e = 15;
let f = 10;
let isGreaterOrEqual = (e >= f); // Greater than or equal to check
console.log("Is e greater than or equal to f?", isGreaterOrEqual); // Output: Is e greater than or equal to f? true




// Example: Checking if a variable is less than or equal to another.
let g = 5;
let h = 10;
let isLessOrEqual = (g <= h); // Less than or equal to check
console.log("Is g less than or equal to h?", isLessOrEqual); // Output: Is g less than or equal to h? true          







// 4. Logical Operators:
// These are used to combine multiple conditions.
// Example: && (AND), || (OR), ! (NOT)

// Real-life example: Checking if a user can access a premium feature.
let isLoggedIn = true;
let hasSubscription = false;
let canAccessPremium = isLoggedIn && hasSubscription; // Both conditions must be true
console.log("Can Access Premium:", canAccessPremium); 
// Output: Can Access Premium: false







// 5. String Operators:
// The + operator can also be used to concatenate strings.
// Example: +, +=

// Real-life example: Creating a personalized greeting message.
let firstName = "Pradip";
let lastName = "Bhatt";
let fullName = firstName + " " + lastName; // Concatenating strings
console.log("Hello, " + fullName + "!"); // Output: Hello, Pradip Bhatt!






// 6. Conditional (Ternary) Operator:
// This is a shorthand for the if-else statement.
// Example: condition ? expr1 : expr2

// Real-life example: Determining if a number is even or odd.
let number = 7;
let isEven = (number % 2 === 0) ? "Even" : "Odd";
console.log("The number is:", isEven); // Output: The number is: Odd






// 7. Type Operators:

// These are used to check or convert the type of a variable.
// Example: typeof, instanceof

// Real-life example: Checking the type of user input.
let userInput = "123";
console.log("Type of userInput:", typeof userInput); // Output: Type of userInput: string

// Why and How We Use Operators:
// - Operators are fundamental in programming as they allow us to manipulate data and control the flow of logic.
// - They are used in calculations, decision-making, string manipulations, and more.
// - Understanding operators helps in writing efficient and readable code.