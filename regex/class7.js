// ^ --> Começa com
// [^] --> negação
// $ --> termina com
// m --> multilene

const { cpfs2 } = require("./base");
cpfsRegex = /^(\d{3}\.){2}\d{3}-\d{2}$/gm

console.log(cpfs2.match(cpfsRegex)) // --> get CPFs
