let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(varA, varB, varC);

// let varAux = varA;
// varA = varB;
// varB = varC;
// varC = varAux;

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);