const { texto, arquivos} = require("./base");

// * --> 0 ou mais vezes
// + --> 1 ou mais vezes
// ? --> 0 ou 1 vez
// {n, m} --> indica o numero minimo e maximo de aparições

const regex1 = /Jo+ão+/gi;

// console.log(texto.match(regex1));

// const regex2 = /\.jpe?g/gi;
const regex2 = /\.jpe{0,1}g/gi;

for (const file of arquivos) {
  console.log(file, file.match(regex2));
}