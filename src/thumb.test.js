import React from 'react';

import { shallow, mount, render } from 'Enzyme';
import Thumbdisplay from './thumb';
import { photoClick } from './App';

const wrapper = shallow( Thumbdisplay );

const photo = {};  //TODO:  Get photo object from query results in Postman


