const firstName = "John";
const last = "Doe";
const age = 30;

const person = {
    firstName,
    last,
    age,
};

console.log(person.age);

// Destructuring object properties

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  id: todoId, // takes the key id and stores it in todoId
  title,
  user: { name }, // destructuring multiple levels 
            // equivalente const name = todo.user.name;
} = todo;

console.log(todoId);

// Destructure arrays

const number = [23, 56, 12, 11];

const [first, second, ...rest] = number;

console.log(first, second, rest);

