// Define a function to perform some operations
function sum(a: number, b: number): number {
    return a + b;
}

// Call the function with sample values
const result = sum(5, 3);
console.log(result); // Output: 8

// Initialize an object to store data
let myData: { [key: string]: any } = {};

// Add some key-value pairs to the object
myData['name'] = 'John';
myData['age'] = 25;
myData['email'] = 'john@example.com';

// Access data from the object and perform calculations
const age = myData.age ? myData.age : 20;
const fullName = myData.name + ` ${myData.email}`;
console.log(age); // Output: 25
console.log(fullName); // Output: John @ john@example.com

// Example of a function that takes multiple arguments and performs an operation
function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

const result = multiply(3, 4);
console.log(result); // Output: 12
