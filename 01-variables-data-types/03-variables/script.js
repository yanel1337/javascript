// Ways to declare a variable
// var, let, const

let firstName = "Pepe";
let lastName = "Perez";

console.log(firstName, lastName);

let age = 39;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase


// re-assigning variable

age = 40;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
    score = score + 1;
}

console.log(score);

const x = 100;

// a const cannot be re-asigned or not initialized


const array = [1, 2, 3, 4];

array.push(5);

console.log(array);



const person = {
    name: "Juan",
};

person.name = "John";
person.email= "dumbass@gmail.com";

console.log(person);

// declare multiple values at once 
let a, b, c;

const d = 10, e = 20;