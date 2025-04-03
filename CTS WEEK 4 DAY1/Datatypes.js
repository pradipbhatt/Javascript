let str1 = "Hello, World!";
let str2 = 'JavaScript is fun!';
let str3 = `This is a template literal.`; // Backticks allow interpolation

console.log(str1, str2, str3);
console.log(typeof str1); // Output: string




let intNum = 10;
let floatNum = 10.5;
let sciNum = 5e3;  // Scientific notation (5000)
let infNum = Infinity; // Infinite value

console.log(intNum, floatNum, sciNum, infNum);
console.log(typeof floatNum); // Output: number



let isJavaScriptFun = true;
let isCodingHard = false;

console.log(isJavaScriptFun, isCodingHard);
console.log(typeof isJavaScriptFun); // Output: boolean


let emptyValue = null;

console.log(emptyValue);
console.log(typeof emptyValue); // Output: object (this is a known JavaScript bug)


let notAssigned;

console.log(notAssigned);
console.log(typeof notAssigned); // Output: undefined




let person = {
    name: "John",
    age: 30,
    isStudent: false
};

console.log(person);
console.log(typeof person); // Output: object
console.log(person.name); // Accessing object properties

let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1, sym2);
console.log(sym1 === sym2); // Output: false (each symbol is unique)
console.log(typeof sym1); // Output: symbol


let bigNumber = 123456789012345678901234567890n;
let anotherBigNumber = BigInt(9007199254740991);

console.log(bigNumber);
console.log(anotherBigNumber);
console.log(typeof bigNumber); // Output: bigint

