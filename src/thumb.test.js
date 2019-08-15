import React from 'react';
import ReactDOM from 'react-dom';

// import { shallow, mount, render } from 'Enzyme';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import { Thumbdisplay } from './thumb';
//import { photoClick } from './App';
// const wrapper = shallow( <Thumbdisplay /> );

//const photo = {};  //TODO:  Get photo object from query results in Postman

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  // return wrapper;
  shallow(<Thumbdisplay />);

})