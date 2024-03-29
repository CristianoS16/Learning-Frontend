describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeNull();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);

    expect(number).toBeCloseTo(10.001, 1);

    expect(number).toHaveProperty('toString');
  });
});

describe('Primitive values', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Test', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).not.toHaveProperty('lastName');
    expect(person).toHaveProperty('age', 30);

    expect(person.name).toBe('Test');
  });
});
