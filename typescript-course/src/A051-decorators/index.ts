@decorator
export class Animal {
  constructor(public color: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.color = 'some color';
    }
  };
}
const animal = new Animal('purple');

console.log(animal);
