export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function mySum<T>(...args: T[]): number {
  const result = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);
  return result;
}

console.log(mySum(1, 2, 3));
