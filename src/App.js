import React, { Component } from 'react';
import './App.css';

import Home from './home';
import Map from './map';
import Nav from './nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Map />
        <Sheet />
        <Switch>
          <Route path='/' exact component={ Home }/>
          <Route path='/map' component={ Mapview }/>
          <Route path='/recent' component={ Sheet }/>
          <Route />
        </Switch>
      </div>
    );
  }
}

export default App;
