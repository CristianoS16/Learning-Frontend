export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }
  getCpf(): string {
    return this.cpf;
  }
  getCompleteName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

export class Student extends Person {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    cpf: string,
    public classId: string,
  ) {
    super(firstName, lastName, age, cpf);
  }
  getCompleteName(): string {
    console.log('Do something');
    const result = super.getCompleteName();
    return result + ' something';
  }
}

export class Client extends Person {
  getCompleteName(): string {
    return `Client --> ${this.firstName} ${this.lastName}`;
  }
}

const student = new Student('Test', 'Fake', 49, '111.111.111-11', '0001');
const client = new Client('Test', 'Fake', 49, '111.111.111-11');
const person = new Person('Test', 'Fake', 49, '111.111.111-11');

console.log(student.getCompleteName());
console.log(client.getCompleteName());
console.log(person.getCompleteName());
