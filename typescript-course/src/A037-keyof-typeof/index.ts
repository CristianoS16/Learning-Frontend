type ColorsObj = typeof portugueseColors;
type ColorsKeys = keyof ColorsObj;

const portugueseColors = {
  red: 'vermelho',
  green: 'verde',
  blue: 'azul',
  purple: 'roxo',
};

function translateColors(color: ColorsKeys, colorsMap: ColorsObj) {
  return colorsMap[color];
}

console.log(translateColors('red', portugueseColors));
