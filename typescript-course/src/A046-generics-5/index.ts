export class Person<T, U> {
  constructor(
    public name: T,
    public age: U,
  ) {}
}

export class Stack<T> {
  private count = 0;
  private elements: { [k: number]: T } = {};

  isEmpty(): boolean {
    return this.count == 0;
  }

  length(): number {
    return this.count;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }

  push(element: T): void {
    this.elements[this.count] = element;
    this.count++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;
    this.count--;
    const element = this.elements[this.count];
    delete this.elements[this.count];
    return element;
  }
}

const stack1 = new Stack<number | string>();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.showStack();

while (!stack1.isEmpty()) console.log(stack1.pop());
