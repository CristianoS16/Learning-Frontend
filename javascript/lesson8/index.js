let string = "Cool Text 123";

// Strings has index in js
console.log(string[5]);
console.log(string.charAt(6));

// Concat strings
console.log(string.concat(string, ' ', 'test'));
console.log(string + string);

// Get indice 
console.log(string.indexOf("text"));
console.log(string.indexOf("o"));
console.log(string.lastIndexOf("o"));

// Apply RegEx
console.log(string.match(/[a-z]/g));
console.log(string.match(/[0-9]/g));
console.log(string.search(/[0-9]/g));
console.log(string.replace(/[0-9]/g, "X"));

// get length of string
console.log("length: ", string.length);

// Slice
console.log("slice: ", string.slice(2, 7));
console.log("slice: ", string.slice(-5));

// Split
console.log("split: ", string.split(' ', 2));

//Cases
console.log(string.toLowerCase());
console.log(string.toUpperCase());


