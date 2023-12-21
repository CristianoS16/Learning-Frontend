const {html} = require('./base')

console.log(html.match(/<.+>.+<\/.+>/g))  //greedy --> pega o máximo possível
console.log(html.match(/<.+?>.+?<\/.+?>/g))  //non-greedy --> pega o mínimo possível