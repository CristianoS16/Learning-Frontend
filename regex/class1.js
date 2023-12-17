// g -> global (find all occurrences)
// i -> insensitive case for words
// () --> create groups

const { texto } = require("./base");

const regex1 = /(maria|ana)(, hoje sua esposa)/i;
const found = regex1.exec(texto);
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);

