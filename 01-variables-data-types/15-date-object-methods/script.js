let x;
let d = new Date();

x = d.toString();
x = d.getTime();
x = d.valueOf();

x = d.getFullYear();
x = d.getMonth();
x = d.getMonth() + 1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();

x = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

x = Intl.DateTimeFormat("en-US").format(d);

console.log(x);
