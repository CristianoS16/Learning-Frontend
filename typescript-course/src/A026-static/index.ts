export class Person {
  constructor(
    private firstName: string,
    private lastName: string,
    private age: number,
    private _cpf: string,
  ) {}

  getName(): string {
    return this.firstName;
  }

  set cpf(value: string) {
    this._cpf = value;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const person = new Person('Test', 'Fake', 49, '111.111.111-11');
person.cpf = '111.111.111-22';
console.log(person.cpf);
