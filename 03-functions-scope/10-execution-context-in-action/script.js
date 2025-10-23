/*
In JavaScript, an execution context is an abstract concept that represents 
the environment in which JavaScript code is executed. It consists of two 
phases: the creation phase, where variables and functions are set up, and 
the execution phase, where the code is run line by line.*/

// Memory creation phase
// Create the global object(browser = window, node.js = global)
// Create the this object and bind it to the global object
// Setup memory heap for storing variables and function references
// Store functions and variables in global execution context and set to "undefined"


// execution phase
// Execute code line by line
// Create a new execution context for each function call

const x = 100;
const y = 50;

function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);