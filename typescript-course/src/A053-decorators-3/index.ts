function dec(
  classPrototype: any,
  methodName: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
}

function decProp(classPrototype: any, name: string | symbol): any {
  let propValue: any;
  return {
    get: () => propValue,
    set: (value: any) => {
      propValue = value + ' 0000';
    },
  };
}

function decorator(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);
  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
}

export class APerson {
  @decProp
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  @decorator
  method(@dec msg: string): string {
    return `${this.firstName} ${this.lastName}: ${msg}`;
  }

  get completeName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  set completeName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.firstName = firstName;
    this.lastName = words.join('');
  }
}

const person = new APerson('Test', 'Fake', 30);
console.log(person.firstName);
// person.method = () => '00000000000';
const method = person.method('message');
console.log(method);
