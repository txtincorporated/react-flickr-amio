import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import { reqPhotos } from './api';

import Nav from './nav';
import Home from './home';
import Mapview from './map';
import Sheetview from './sheet';

class App extends Component {
  state = {
    photos: [],

  };

  getPhotos = () => {
    reqPhotos().then(photos => {
      this.setState({
        photos: photos.data,

      });
    });
  }

  render() { 
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={ Home } photos={ this.state.photos }/> {/*If not, pass in the render fn as shown in 8/31 class */} 
          <Route path='/map' component={ Mapview } photos={ this.state.photos }/>
          <Route path='/recent' component={ Sheetview } photos={ this.state.photos }/>

          <Route />
        </Switch>
      </div>
    );
  }
}

export default App;
