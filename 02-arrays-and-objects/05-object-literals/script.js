// Object literal

const person = {
    name: "John Doe",
    age: 30,
    isAdmin: true,
    address: {
        street: "123 street",
        city: "Dublin",
    },
    hobbies: ["music", "sports"],
};

let x;

x = person.name;
x = person.hobbies[0];
x = person.isAdmin = false;

// delete person.name;

x = person.name;

person.greet = function () {
    console.log(`Hello my name is ${this.name}`);
};

person.greet();

console.log(x);