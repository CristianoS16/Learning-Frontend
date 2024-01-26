export function add(a: unknown, b: unknown): string | number {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Person = { name: string };
type Animal = { color: string };
type PersonOrAnimal = Person | Animal;
class Student implements Person {
  constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal) {
  // if ('name' in obj) console.log(obj.name);
  if (obj instanceof Student) console.log(obj.name);
}

showName(new Student('Test'));
