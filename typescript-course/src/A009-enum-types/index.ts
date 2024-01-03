enum Colors {
  RED = 10,
  BLUE = 100,
  YELLOW = 200,
}

console.log(Colors);
console.log(Colors.RED);
console.log(Colors[10]);

enum Colors {
  BLACK = 11,
}

console.log(Colors);

export function findColor(color: Colors): void {
  console.log(Colors[color]);
}

findColor(10);
