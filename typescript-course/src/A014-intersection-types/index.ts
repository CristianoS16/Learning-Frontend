type HasFirstName = { firstName: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };
type Person = HasFirstName & HasLastName & HasAge;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';

type Intersection = AB & AC & AD;

const person: Person = {
  firstName: 'test',
  lastName: 'test1',
  age: 10,
};

export { person };
