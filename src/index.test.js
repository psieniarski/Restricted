import Restricted, { everyValidator } from './index';

describe('everyValidator', () => {
  it('should call validator function', () => {
    const validator = jest.fn(() => true);
    everyValidator([validator]);
    expect(validator.mock.calls.length).toBe(1);
  });
  it('should return true if all functions in the array return logical true', () => {
    const validators = [() => true, () => true];
    expect(everyValidator(validators)).toBe(true);
  });
  it('should return true if all elements in array are true', () => {
    const validators = [true, true];
    expect(everyValidator(validators)).toBe(true);
  });

  it('should return false if any element in array is false', () => {
    const validators = [true, false];
    expect(everyValidator(validators)).toBe(false);
  });
});
