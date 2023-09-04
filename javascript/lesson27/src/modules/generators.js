const rand = (min = 0, max = 255) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getNumber = () => String.fromCharCode(rand(48, 58));
const getUppercaseLetter = () => String.fromCharCode(rand(65, 91));
const getLowercaseLetter = () => String.fromCharCode(rand(97, 123));
const getSymbol = () => {
  const avaliableSymbols = '`-~=!@#$%^&*()_+[]{}|:;"<>,.?/';
  return avaliableSymbols[rand(0, avaliableSymbols.length)];
};

export default function generatePassword(
  pwLength,
  useNumbers,
  userUpper,
  useLower,
  useSymbols
) {
  const passwordArray = [];
  const pwLimit = Number(pwLength)
  for (let i = 0; i < pwLimit; i++) {
    useNumbers && passwordArray.push(getNumber());
    userUpper && passwordArray.push(getUppercaseLetter());
    useLower && passwordArray.push(getLowercaseLetter());
    useSymbols && passwordArray.push(getSymbol());
  }

  return passwordArray.join('').slice(0, pwLimit)
}
