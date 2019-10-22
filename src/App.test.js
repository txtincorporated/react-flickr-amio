import React from 'react';

import { shallow } from 'enzyme';

import { App } from './App';


describe('Smoke test App', () => {  
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    
    expect(wrapper.exists()).toBe( true );
  
  });
});
