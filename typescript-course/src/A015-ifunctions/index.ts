type MapStringsCallback = (item: string) => string;

export function mapStrings(
  array: Array<string>,
  callbackfn: MapStringsCallback,
): Array<string> {
  const newArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abcMapped);
