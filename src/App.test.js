import React from 'react';
// import ReactDOM from 'react-dom';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import { App } from './App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(App, div);
  shallow(<App />);

}
);
