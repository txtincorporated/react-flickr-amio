import React from 'react';

import { shallow } from 'enzyme';

import { Thumbdisplay } from './thumb';

it('renders without crashing', () => {
  const wrapper = shallow(<Thumbdisplay />);
  
  expect(wrapper.exists()).toBe( true );

})