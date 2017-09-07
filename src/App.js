import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import { reqPhotos } from './api';

import Nav from './nav';
import Photoview from './photoview';
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
    // debugger;
  }

  render() { 
    // const photoProp = this.state.photos;

    return (
      <div className="App">
        <Nav />
        <Photoview />
        <Switch>
          <Route path='/' render={props => (
            <Home {...props} photos={ this.state.photos } />
          )} /> 
          <Route path='/map' component={ Mapview } />
          <Route path='/recent' component={ Sheetview } />

        </Switch>
      </div>
    );
  }
}

export default App;
