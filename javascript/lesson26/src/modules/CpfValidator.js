export default class CpfValidator {
  constructor(inputCpf) {
    Object.defineProperty(this, "cleanCpf", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: inputCpf.replace(/\D+/g, ""),
    });
  }

  isSequence() {
    return (
      this.cleanCpf.charAt(0).repeat(this.cleanCpf.length) === this.cleanCpf
    );
  }


  static generateDigit(cpfWithoutDigits) {
    let total = 0;
    let reverse = cpfWithoutDigits.length + 1;
    for (let stringNumber of cpfWithoutDigits) {
      total += reverse * Number(stringNumber);
      reverse--;
    }
    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : "0";
  }

  getNewCpf() {
    const cpfWithoutDigits = this.cleanCpf.slice(0, -2);
    const digit1 = CpfValidator.generateDigit(cpfWithoutDigits);
    const digit2 = CpfValidator.generateDigit(cpfWithoutDigits + digit1);
    this.newCPF = cpfWithoutDigits + digit1 + digit2;
  }

  validate() {
    if (!this.cleanCpf) return false;
    if (typeof this.cleanCpf !== "string") return false;
    if (this.cleanCpf.length !== 11) return false;
    if (this.isSequence()) return false;
    this.getNewCpf();
    return this.newCPF === this.cleanCpf;
  }
}
