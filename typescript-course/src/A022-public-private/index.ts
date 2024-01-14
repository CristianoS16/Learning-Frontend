export class Company {
  public readonly name: string;
  private readonly people: Person[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addPerson(person: Person): void {
    this.people.push(person);
  }

  showPeople(): void {
    this.people.forEach((person) => console.log(person));
  }
}

export class Person {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
  ) {}
}

const company1 = new Company('Test', '11.111.111/0001-11');
const person1 = new Person('João', 'Miguel');
const person2 = new Person('Ana', 'Silva');
const person3 = new Person('Cristiano', 'Sampaio');
company1.addPerson(person1);
company1.addPerson(person2);
company1.addPerson(person3);
company1.addPerson({
  firstName: 'Fake',
  lastName: 'Test',
});

console.log(company1.name);
