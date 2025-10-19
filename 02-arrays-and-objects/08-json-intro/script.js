// json = javascript object notation
// for storing data in a redable format

const post = {
    id: 1,
    title: "post one",
    body: "this is the body",
};

// Convert to Json string

const str = JSON.stringify(post);

// Parse Json

const obj = JSON.parse(str);

console.log(obj);