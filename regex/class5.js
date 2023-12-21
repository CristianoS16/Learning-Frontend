const {alfabeto} = require('./base')

// [abc] --> Conjunto
// [^] --> Negação
// [-] --> Range
// console.log(alfabeto.match(/[abc123]+/g)) // --> [ 'abc', '123' ]
// console.log(alfabeto.match(/[^abc123]/g)) // --> tudo menos a, b, c, 1, 2, 3
// console.log(alfabeto.match(/[0-9]+/g)) // \d --> [ '0123456789' ]
// console.log(alfabeto.match(/\D+/g)) // \D == ^\d --> tudo menos os numeros
// console.log(alfabeto.match(/[a-zA-Z0-9]+/g)) // \w --> ['ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz','0123456789']
// console.log(alfabeto.match(/\W+/g)) // --> \W == ^\w 
console.log(alfabeto.match(/\s+/g)) // --> espaços