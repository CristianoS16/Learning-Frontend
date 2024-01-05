type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  favoriteColor?: string;
};
type RGBColors = 'red' | 'green' | 'blue';
type CMYKColors = 'cyan' | 'magenta' | 'yellow' | 'black';
type FavoriteColor = RGBColors | CMYKColors;

const person1: Person = {
  name: 'Test',
  age: 10,
  salary: 10_000,
};

export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
  return { ...person, favoriteColor: color };
}

console.log(setFavoriteColor(person1, 'blue'));
