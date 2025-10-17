let x;

const name = "John";
const age = 30;

x = "Hello, my name is " + name + " and I am " + age + " years old";

// Template Literals

x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods
const s = "Hello world!";

x = s.length;

// Access value by key
x = s[0];

// all the methods available in the prototype
x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(6);

x = s.indexOf('H');

x = s.substring(0, 5);

x = s.slice(-12, -6);

x = "hello world";
x = s.replace("world", "john");

x = "hello world";
x = s.includes("world");

console.log(x);