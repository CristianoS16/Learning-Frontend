export class Person {
  static defaultAge = 0;
  static desaultCpf = '000.000.000-00';
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public cpf: string,
  ) {}

  static createPerson(firstName: string, lastName: string): Person {
    return new Person(
      firstName,
      lastName,
      Person.defaultAge,
      Person.desaultCpf,
    );
  }
}

const person1 = new Person('Test', 'Fake', 49, '111.111.111-11');
const person2 = Person.createPerson('fakeName', 'fake');

console.log(person1);
console.log(person2);
