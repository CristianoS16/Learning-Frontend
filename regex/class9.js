const { lookahead } = require("./base");

// console.log(lookahead.match(/.+[^in]active$/gim))

// Positive lookahead --> (frases que tem active)
// console.log(lookahead.match(/.+(?=[^in]active)/gim))

// Positive lookbehind --> (frases que começam com ONLINE)
console.log(lookahead.match(/(?<=ONLINE\s+).*/gim))
