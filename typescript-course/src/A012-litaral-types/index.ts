let a = 100 as const; // eslint-disable-line

const person = {
  firstName: 'test' as const,
  lastName: 'fake',
};
// person.firstName = 'test1';

export function getColor(color: 'red' | 'yellow' | 'blue') {
  return color;
}

console.log(getColor('blue'));
