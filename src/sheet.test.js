import React from 'react';

import { shallow } from 'enzyme';

import { Sheetview } from './sheet';

const mockProps = {
  photos: [{}],
  photo: {},
  clearPhoto:  () => {},
  photoClick: () => {},

};

describe('Smoke test Sheetview', () => {  
  it('renders without crashing', () => {
    const wrapper = shallow(<Sheetview photos={ mockProps.photos }/>);
    
    expect(wrapper.exists()).toBe( true );
  
  });
});