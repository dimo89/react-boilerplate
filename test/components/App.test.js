import App from '../../src/components/App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('div').text()).toBe('React Boilerplate');
    expect(wrapper).toMatchSnapshot
  });
});
