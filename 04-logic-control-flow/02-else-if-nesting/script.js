const d = new Date();
const hour = d.getHours();

if (hour < 12) {
    console.log("Good morning!");
}
else if (hour < 18) {
    console.log("Good afternoon!");
}
else {
    console.log("Good night!");
}

// nested if

if (hour < 12) {
    console.log("Good morning!");
    if (hour === 6) {
        console.log("Wake up!");
    }
}
else if (hour < 18) {
    console.log("Good afternoon!");
}
else {
    console.log("Good night!");
    if (hour >= 20) {
        console.log("zzzzzz");
    }
}