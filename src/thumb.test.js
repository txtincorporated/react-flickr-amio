import React from 'react';

import { shallow, configure } from 'enzyme';

import { Thumbdisplay } from './thumb';

//const photo = {};  //TODO:  Get photo object from query results in Postman

it('renders without crashing', () => {
  shallow(<Thumbdisplay />);

})