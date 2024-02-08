function invertNames(param1: string, param2: string) {
  // Closure
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log('Decorator');
    console.log('params: ', param1, param2);
    return class extends target {
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.color = this.invertNames(args[0]);
      }

      invertNames(value: string): string {
        return value.split('').reverse().join('');
      }
    };
  };
}

@invertNames('value1', 'value2')
export class Animal {
  constructor(public color: string) {
    console.log('Class');
  }
}

const animal = new Animal('red');
console.log(animal);
