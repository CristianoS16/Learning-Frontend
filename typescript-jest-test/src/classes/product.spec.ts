import { Product } from './product';

const createSut = (name: string, price: number): Product =>
  new Product(name, price);

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());
  it('should have properties name and price', () => {
    const sut = createSut('Test', 50.5);
    expect(sut).toHaveProperty('name', 'Test');
    expect(sut.price).toBeCloseTo(50.5);
  });
});
