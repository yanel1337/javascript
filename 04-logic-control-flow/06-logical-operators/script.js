console.log(10 > 20 && 30 > 15);

console.log(10 > 20 || 30 > 15);


// && - Will return first falsy value or the last value
let a;

a = "" && 20;

console.log(a);

const posts = ["Hello"];
posts.length > 0 && console.log(posts[0]);

// || - Will return the first truthy value or the last value

let b;

b = 10 || 20;
b = 0 || 10 || 0;

console.log(b);

// ?? - Returns the right side operand when the left is null or undefined(only null or undefined)

let c;

c = 10 ?? 20;
c = undefined ?? 20;

console.log(c);