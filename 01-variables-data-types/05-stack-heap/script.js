// Values are stored on the stack
const name = "John";
const age = 30;

// Reference value are stored on the heap

const person = {
    name: "pepe",
    age: 40
}

let newName = name;
newName = "Jonathan";

let newPerson = person;
newPerson.name = "Bradley";

console.log(name, newName);

console.log(person, newPerson);
