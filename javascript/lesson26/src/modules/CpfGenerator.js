import CpfValidator from "./CpfValidator";

export default class CpfGenerator {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  cpfFormater(cpf) {
    return (
      cpf.slice(0,3) + '.' +
      cpf.slice(3,6) + '.' +
      cpf.slice(6,9) + '-' +
      cpf.slice(9)
    )
  }

  generateNewCpf() {
    const cpfWithoutDigits = this.rand();
    const firstDigit = CpfValidator.generateDigit(cpfWithoutDigits);
    const secoundDigit = CpfValidator.generateDigit(
      cpfWithoutDigits + firstDigit
    );
    return this.cpfFormater(cpfWithoutDigits + firstDigit + secoundDigit)
  }
}
