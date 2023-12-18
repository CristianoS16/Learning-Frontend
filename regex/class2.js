const { texto } = require("./base");

const regex1 = /João|Maria/gi;

console.log(texto.match(regex1));

console.log(texto.replace(regex1, "Felipe"))

console.log(texto.replace(/(João|Maria)/gi, "<b>$1</b>"))

console.log(texto.replace(/(João|Maria)/gi, function(input){return input.toUpperCase()}))