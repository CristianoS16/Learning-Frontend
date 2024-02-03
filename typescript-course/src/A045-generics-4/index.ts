// `extends` works like a constrain in that case
type getKeyFn = <O, K extends keyof O>(obkect: O, key: K) => O[K];

const getKey: getKeyFn = (obj, key) => obj[key];

const animal = {
  color: 'Pink',
  vaccine: ['vaccine 1', 'vaccine 2'],
};

const vaccines = getKey(animal, 'vaccine');

console.log(vaccines);
