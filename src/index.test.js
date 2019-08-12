import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Restricted, { everyValidator } from './index';

Enzyme.configure({ adapter: new Adapter() });

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
  it('should return true if all elements in the array are true', () => {
    const validators = [true, true];
    expect(everyValidator(validators)).toBe(true);
  });

  it('should return false if any element in the array is false', () => {
    const validators = [true, false];
    expect(everyValidator(validators)).toBe(false);
  });
});

describe('Restricted', () => {
  it('should return children if show prop is true', () => {
    const child = <i id="child" />;
    const restricted = shallow(<Restricted show={true}>{child}</Restricted>);
    expect(restricted.contains(child)).toBe(true);
  });
  it('should return fallback if show prop is false', () => {
    const fallback = <i id="falback" />;
    const restricted = shallow(
      <Restricted show={false} fallback={fallback}></Restricted>
    );
    expect(restricted.contains(fallback)).toBe(true);
  });
});
