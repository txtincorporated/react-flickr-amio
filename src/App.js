import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import { reqPhotos } from './api';

import Nav from './nav';
import Home from './home';
import Mapview from './map';
import Sheetview from './sheet';

const FRESH_STATE = {
  photos: [],
  photo: {
    farm: '',
    server: '',
    id: '',
    secret: '',
    title: '',
  },
  shown: false,
};


class App extends Component {
  state = FRESH_STATE;
  
  componentWillMount() {
    reqPhotos().then(flickr => {        
      this.setState({
        photos: flickr.photos.photo,
        
      });
    });
  }

  photoSetter = pic => {
    console.log('photoSetter photo:  ', pic)
    this.setState({
      photo: { ...pic },

    })
  }

  photoShow = () => {
    this.setState({
      shown: true,

    })
  }

  photoClick = pic => {
    this.photoSetter( pic )      
    this.photoShow()
    
  }

  photoClose = () => {
    this.setState({
      photo: {
        farm: '',
        server: '',
        id: '',
        secret: '',
        title: '',
      },
      shown: false,

    });    
  }

  render() { 
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' render={props => (
            <Home {...props} 
              photos={ this.state.photos } 
              photo={ this.state.photo }
              shown={ this.state.shown }
              photoClear={ this.photoClose }
              setPhoto={ pic => {
                this.photoSetter( pic )
                
              }}
              showPhoto={ this.photoShow }
              setShowPhoto={ this.photoClick }

            />
          )} /> 
          <Route path='/map' component={ Mapview } />
          <Route path='/recent' component={ Sheetview } />

        </Switch>
      </div>
    );
  }
}

export default App;