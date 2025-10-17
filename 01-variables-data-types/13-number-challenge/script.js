let x, y;


x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1)

console.log(x);
console.log(y);

let sumOutput, differenceOutput, productOutput, quotientOutput, rmOutput;

sumOutput = x + y;
differenceOutput = x - y;
productOutput = x * y;
quotientOutput = x / y;
rmOutput = x % y;

sumOutput = `${x} + ${y} = ${sumOutput}`;
differenceOutput = `${x} + ${y} = ${differenceOutput}`;
productOutput = `${x} + ${y} = ${productOutput}`;
quotientOutput = `${x} + ${y} = ${quotientOutput}`;
rmOutput = `${x} + ${y} = ${rmOutput}`;

console.log(sumOutput); // 31 + 15 = 46
console.log(differenceOutput); // 31 - 15 = 16
console.log(productOutput); // 31 * 15 = 465
console.log(quotientOutput); // 31 / 15 = 2.066666666666667
console.log(rmOutput); // 31 % 15 = 1