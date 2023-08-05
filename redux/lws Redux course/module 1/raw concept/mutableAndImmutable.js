// mutable
// Arrays are mutable
let mutableArray = [1, 2, 3];
mutableArray.push(4); // Modifying the array by adding an element
console.log(mutableArray); // Output: [1, 2, 3, 4]

// Objects are mutable
let mutableObject = { name: "Alice", age: 25 };
mutableObject.age = 26; // Modifying the object property
console.log(mutableObject); // Output: { name: "Alice", age: 26 }


// immutable
// Strings are immutable
let immutableString = "Hello";
let newImmutableString = immutableString + ", World!"; // Creating a new string
console.log(newImmutableString); // Output: "Hello, World!"
console.log(immutableString); // Output: "Hello" (original string is unchanged)

// Numbers are immutable
let num1 = 5;
let num2 = num1 + 3; // Creating a new number
console.log(num2); // Output: 8
console.log(num1); // Output: 5 (original number is unchanged)

// ES6 introduced const for immutable variables
const immutableValue = 10;
// immutableValue = 20; // This will result in an error
