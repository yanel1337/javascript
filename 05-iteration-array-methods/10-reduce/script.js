const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function(acumulator, currentValue) {
    return acumulator + currentValue;
}, 0);

const sum2 = numbers.reduce((acumulator, currentValue) => acumulator + currentValue, 10);


console.log(sum2);

//Using a for loop

function hello(numbers) {
    let i = 0;
    let acc = 0;
    for (const cur of numbers) {

        acc += cur;
    }
    return acc;
};

console.log(hello(numbers));

const cart =  [
    {id: 1, name: "Product 1", price: 130},
    {id: 2, name: "Product 2", price: 150},
    {id: 3, name: "Product 3", price: 175},
];

const total = cart.reduce((acumulator, product) => {
    return acumulator + product.price;
}, 0);

console.log(total);