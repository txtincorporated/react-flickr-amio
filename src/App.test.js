import React from 'react';
// import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

import { App } from './App';


describe('Smoke test App', () => {  
  it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(App, div);

    //  Do fetch mock here 
     
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe( true );
  
  }
  );

});
