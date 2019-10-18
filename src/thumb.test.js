import React from 'react';

import { shallow } from 'enzyme';

import { Thumbdisplay } from './thumb';

//const photo = {};  //TODO:  Get photo object from query results in Postman

it('renders without crashing', () => {
  const wrapper = shallow(<Thumbdisplay />);
  
  expect(wrapper.exists()).toBe( true );

})