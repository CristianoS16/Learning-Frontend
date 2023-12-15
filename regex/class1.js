// g -> global (find all occurrences)
// i -> insensitive case for words
// () --> create groups

const { text } = require("./base");

const regex1 = /(adipisicing) (elit.)/i;
const found = regex1.exec(text);
if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}
