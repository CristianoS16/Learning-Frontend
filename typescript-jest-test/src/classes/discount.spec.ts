import {
  Discount,
  FifyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => new className();

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());
  it('should have no discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });
  it('should apply 50% discount on proce', () => {
    const sut = createSut(FifyPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });
  it('should apply 10% discount on proce', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
