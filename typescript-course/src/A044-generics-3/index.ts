// interface PesonProtocol<T = string, U = number> {
interface PesonProtocol<T = string, U = number> {
  firstName: T;
  lastName: T;
  age: U;
}

const student1: PesonProtocol<string, number> = {
  firstName: 'Test',
  lastName: 'test',
  age: 12,
};

const student2: PesonProtocol<number, number> = {
  firstName: 123,
  lastName: 456,
  age: 12,
};

const student3: PesonProtocol = {
  firstName: 'Test3',
  lastName: 'test3',
  age: 12,
};

console.log(student1);
console.log(student2);
console.log(student3);

type PesonProtocol2<T = string, U = number> = {
  firstName: T;
  lastName: T;
  age: U;
};

const student4: PesonProtocol2<string, number> = {
  firstName: 'Test',
  lastName: 'test',
  age: 12,
};

const student5: PesonProtocol2<number, number> = {
  firstName: 123,
  lastName: 456,
  age: 12,
};

const student6: PesonProtocol2 = {
  firstName: 'Test3',
  lastName: 'test3',
  age: 12,
};

console.log(student4);
console.log(student5);
console.log(student6);
