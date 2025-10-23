const x = 100;

if (true) {
    const y = 200; // y belongs to this block
}

for (let i = 0; i <= 10; i++){
    console.log(i);
}

if (true) {
    const a = 500; //error
    let b = 600; //error
    var c = 700; // not block scoped
}

console.log(c);