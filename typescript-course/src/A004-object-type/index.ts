const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'A',
  keyB: 'B',
};

objectA.keyC = 'new C';
objectA.keyD = 'new D';

console.log(objectA);
