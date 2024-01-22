interface NamesType {
  firstName: string;
  lastName: string;
}

interface completeName {
  completeName(): string;
}

interface PersonType extends NamesType, completeName {}

export class Person implements PersonType {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  completeName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

const personObj: PersonType = {
  completeName() {
    return `Obj: ${this.firstName} ${this.lastName}`;
  },
  firstName: 'fake',
  lastName: 'name',
};

const person1 = new Person('Test', 'fake');
console.log(person1.completeName());
console.log(personObj.completeName());
