// Function declaration
console.log(addDollarSign(100)); // only declarations are available before the code is executed


function addDollarSign(value) {
    return "$" + value;
}

console.log(addDollarSign(100));

// Function expression

const addPlusSign = function (value)  {
    return "+" + value;
};

console.log(addPlusSign(200));