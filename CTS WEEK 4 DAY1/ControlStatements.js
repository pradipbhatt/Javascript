// Control Flow in JavaScript
// Control flow determines the order in which statements are executed in a program. JavaScript provides several control flow statements to handle decision-making and looping.


// 1. if, else if, else
// The if statement is used to execute a block of code if a specified condition is true. The else if and else statements provide additional conditions or a fallback when none of the conditions are true.

// if (condition) {
//     // Code to execute if condition is true
// } else if (anotherCondition) {
//     // Code to execute if
// }

let theme = "dark";

if (theme === "dark") {
    // document.body.classList.add("dark-mode");
    console.log("Dark theme");
    
} else if (theme === "light") {
    // document.body.classList.remove("dark-mode");
    console.log("Light theme");
    
} else {
    console.log("Unknown theme preference");
}


// Trick: Always order conditions from most specific to general. This avoids unnecessary checks.


// 2. Switch Statement
// // A switch statement executes different code blocks based on different cases.
// // 
// switch(expression) {
//     case value1:
//         // Code for value1
//         break;
//     case value2:
//         // Code for value2
//         break;
//     default:
//         // Code if no cases match
// }

// Handling API Response Status


let statusCode = 404;

switch(statusCode) {
    case 200:
        console.log("Page loaded successfully!");
        break;
    case 404:
        console.log("Page not found. Redirecting...");
        // window.location.href = "/404.html";
        break;
    case 500:
        console.log("Server error. Try again later.");
        break;
    default:
        console.log("Unknown status code");
}
// 🔹 Trick: Always use break; to prevent fall-through, unless intentional.



// 3. Loops (for, while, do-while)
// Loops are used for repeating actions.

// (a) for Loop
// Executes a block of code a fixed number of times.

// for (let i = 0; i < limit; i++) {
//     // Repeated code
// }
// Real-life Example (Web Technology)
// Displaying a List of Products

let products = ["Laptop", "Tablet", "Smartphone"];

for (let i = 0; i < products.length; i++) {
    console.log(`Product ${i + 1}: ${products[i]}`);
}
// 🔹 Trick: Loop through arrays with for...of for better readability:

for (let a of products) {
    console.log(a);
}






// (b) while Loop
// Repeats code while a condition is true.

// while (condition) {
//     // Code runs while condition is true
// }


// Real-life Example (Web Technology)
// Loading Comments on Scroll (Infinite Scroll)

let commentsLoaded = 0;

while (commentsLoaded < 100) {
    console.log(`143 3000 ${commentsLoaded + 1}`);
    commentsLoaded++;
}
// 🔹 Trick: Always include an exit condition to prevent infinite loops.







// (c) do-while Loop
// Runs code at least once, then checks the condition.

// do {
    // Code executes at least once
// } while (condition);
// Real-life Example (Web Technology)
// User Login Attempts

let attempts = 0;
let maxAttempts = 3;

do {
    console.log(`Attempt ${attempts + 1}: \n 
        Enter password \n `);
    attempts++;
} while (attempts < maxAttempts);
// 🔹 Trick: Use do-while when at least one execution is required.








// 4. break and continue
// (a) break Statement
// Stops loop execution.

// Real-life Example (Web Technology)
// Searching for an Element in an Array


let users = ["Alice", "Bob", "Charlie"];
let searchName = "Bob";

for (let user of users) {
    if (user === searchName) {
        console.log(`${user} found!`);
        break; // Stops the loop after finding "Bob"
    }
}
// (b) continue Statement
// Skips the current iteration and moves to the next.

// Real-life Example (Web Technology)
// Skipping Empty Fields in Form Submission


let formData = ["John", "", "john@example.com"];

for (let field of formData) {
    if (field === "") {
        console.log("Skipping empty field...");
        continue;
    }
    console.log(`Processing: ${field}`);
}
// 🔹 Trick: Use continue to avoid unnecessary operations inside loops.