const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "rasberrry"];

// fruits.push(berries);

x = fruits[3];

const allFruits = [fruits, berries];

x = allFruits;

x = allFruits[1][0];

x = fruits.concat(berries);

// Spread operator
x = [...fruits, ...berries];

// Flatten arrays
const arr = [1, 2, [2, 3], 2, [5, 5]];
x = arr.flat();

// Static methods on array object
x = Array.isArray(fruits);

x = Array.from("123123123");

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);