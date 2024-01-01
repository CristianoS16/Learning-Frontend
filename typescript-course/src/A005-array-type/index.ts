// Array<T> - T[]
export function multArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value);
}

export function concatStrings(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

const result = multArgs(1, 2, 3, 4);
const concat = concatStrings('a', 'b', 'c');
console.log(result);
console.log(concat);
