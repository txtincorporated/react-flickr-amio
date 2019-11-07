import React from 'react';

import { shallow } from 'enzyme';

import { Sheetview } from './sheet';

jest.mock( './photo', () => () => '<mock-photoview />' );
jest.mock( './photos', () => () => 'mock-photoset' );
jest.mock( './thumb', () => () => 'mock-thumbview' );

const mockProps = {
  photos: [{ id: 0 }],
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
