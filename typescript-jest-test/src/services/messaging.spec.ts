import { Messaging } from './messaging';

const createSut = () => new Messaging();

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());
  it('should return undefined', () => {
    const sut = createSut();
    expect(sut.sendMessage('Test')).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Test');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with ("Sent Message: !, msg)', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Test');
    expect(consoleSpy).toHaveBeenCalledWith('Sent Message: ', 'Test');
  });
});
