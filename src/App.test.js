import React, { fetch } from 'react';
// import ReactDOM from 'react-dom';

import { shallow, configure } from 'enzyme';

import { App } from './App';


describe('Smoke test App', () => {  
  it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(App, div);

    //  Do fetch mock here 
     
    return shallow(<App />);
  
  }
  );

});
