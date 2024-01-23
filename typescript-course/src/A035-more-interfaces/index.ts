// Declaration mergin
interface Person {
  firstName: string;
}

interface Person {
  readonly lastName: string;
}

interface Person {
  readonly address: readonly string[];
}

interface Person {
  readonly age?: number;
}

const person: Person = {
  firstName: 'fake',
  lastName: 'test',
  address: ['Av. Test'],
  age: 20,
};

// person.address.push('Another address');
console.log(person.address);
