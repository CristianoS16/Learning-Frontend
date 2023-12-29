/* eslint-disable */

// Basic Types
let name: string = 'Test'; // Qualquer tipo de strings: '' "" ``
let age: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let isAdult: boolean = true; // true ou false
let symbol1: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let numbersArray: Array<number> = [1, 2, 3];
let numbersArray2: number[] = [1, 2, 3];
let stringArray: Array<string> = ['a', 'b'];
let stringArray2: string[] = ['a', 'b'];

// Objects
let person: {name: string, age: number, isAdult?: boolean} = {
  age: 23,
  name: 'Cris'
};

// Functions
function sum(x: number, y: number): number {
  return x + y;
}
const sum2: (x: number, y: number) => number = (x, y) => x + y;

// Module mode
export default 1;
