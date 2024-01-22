type NamesType = {
  firstName: string;
  lastName: string;
};

type completeName = {
  completeName(): string;
};

type PersonType = NamesType & completeName;

export class Person implements PersonType {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  completeName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

const person1 = new Person('Test', 'fake');
console.log(person1.completeName());
