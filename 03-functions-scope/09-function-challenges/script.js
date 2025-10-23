const getCelsius = (a) => ((a - 32) / 1.8);

console.log(`The temperature is ${getCelsius(80)} \xB0C`);

function minMax(array) {
    //The spread operator ... expands an array into individual arguments.
    // Math.min and Math.max will treat an array as a single argument
    const min = Math.min(...array);
    const max = Math.max(...array);
    return ({min: min, max: max});
};

console.log(minMax([1, 2, 3, 4, 5, 20, -1]));

(function area (width, length) {
    const area = width * length;
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`);
})(100, 200);