function withoutReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Fake',
  lastName: 'Name',

  showName(): void {
    console.log(this.name + this.lastName);
  },
};

withoutReturn('Test', 'test');
person.showName();

export { person };
