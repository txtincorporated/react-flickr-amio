import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import { reqPhotos } from './api';

import Nav from './nav';
import Home from './home';
import Mapview from './map';
import Sheetview from './sheet';

class App extends Component {
  state = {
    photos: [],

  };

  componentWillMount() {
    reqPhotos().then(flickr => {  
      console.log('flickr.photos.photo: ', flickr.photos.photo);

      this.setState({
        photos: flickr.photos.photo,
        
      });
    });
  }

  render() { 
    debugger;

    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={ Home } photos={ this.state.photos } /> {/*If not, pass in the render fn as shown in 8/31 class */} 
          <Route path='/map' component={ Mapview } />
          <Route path='/recent' component={ Sheetview } />

        </Switch>
      </div>
    );
  }
}

export default App;
