// const makeSum = (numbersArray, weight) => {
//   return numbersArray.reduce((acc, val) => {
//     const step = Number(val) * weight;
//     weight -= 1;
//     return acc + step;
//   }, 0);
// };

// const getDigit = (number) => {
//   const num = 11 - (number % 11);
//   return num > 9 ? 0 : num;
// };

// const cpfValidator = (cpf) => {
//   const cpfArray = Array.from(cpf.replace(/\D+/g, ""));

//   const firstSum = makeSum(cpfArray.slice(0, -2), 10);
//   const firstDigit = getDigit(firstSum);

//   const secoundSum = makeSum([...cpfArray.slice(0, -2), firstDigit], 11);
//   const secoundDigit = getDigit(secoundSum);

//   return (
//     Number(cpfArray[9]) === firstDigit && Number(cpfArray[10]) === secoundDigit
//   );
// };

// console.log(cpfValidator("705.484.450-52"));
// console.log(cpfValidator("109.168.766-84"));

function ValidateCPF(inputCPF) {
  Object.defineProperty(this, "clearCPF", {
    enumerable: true,
    get: function () {
      return inputCPF.replace(/\D+/g, "");
    },
  });
}

ValidateCPF.prototype.validate = function () {
  if (typeof this.clearCPF === "undefined") return false;
  if (this.clearCPF.length !== 11) return false;
  if (this.isSequence()) return false;
  const partialCPF = this.clearCPF.slice(0, -2);
  const firstDigit = this.createDigits(partialCPF)
  const secoundDigit = this.createDigits(partialCPF + firstDigit)
  const newCPF = partialCPF + firstDigit + secoundDigit

  return newCPF === this.clearCPF;
};

ValidateCPF.prototype.createDigits = function (PartialCPF) {
  const cpfArray = Array.from(PartialCPF);
  let count = cpfArray.length + 1;
  const total = cpfArray.reduce((acc, val) => {
    acc += (Number(val) * count)
    count--;
    return acc
  }, 0)
  const digit = 11 - (total % 11)
  return digit > 9 ? '0' : String(digit)
}

ValidateCPF.prototype.isSequence = function() {
  return this.clearCPF[0].repeat(this.clearCPF.length) === this.clearCPF
};

const cpf = new ValidateCPF("705.484.451-52");
console.log(cpf.validate());

// const cpf = new ValidateCPF("070.987.720-03");
// console.log(cpf.validate());
