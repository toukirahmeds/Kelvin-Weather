// Temperature in kelvin
const kelvin = 0;

// Temperature in celsius
const celsius = kelvin - 273;

// Temperature in fahrenheit, rounded to lowest integer value
const fahrenheit = Math.floor((celsius * (9/5)) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// Temperature in newton, rounded to lowest integer value
const newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${newton} degrees Newton`);
