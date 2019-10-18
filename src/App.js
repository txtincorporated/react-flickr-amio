import React, { Component } from 'react';
// import './App.css';

import { Route, Switch }  from 'react-router-dom';

import { apiParams } from './api';

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
  
  componentDidMount() {
    this.reqPhotos().then(flickr => {        
      this.setState({
        photos: flickr.photos.photo,
        
      });
    });
  }
    
    reqPhotos = async () => {
      // let startDate = (Date.now() - 86400000)/1000 | 0;
    
      const res = await fetch( apiParams );
      return await res.json();
    
    };
  
  photoSetter = pic => {
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

  containerDefault = {
    position: 'fixed',
    top: '1.5em',
    height: '100vh',
    width: '100vw',
    border: '0.25em solid black',

  }

  render() { 
    const { photos, photo, shown } = this.state
    const { containerDefault, photoShow, photoClose, photoClick } = this

    return (
      <div className="App">
        <Switch>
          <Route path = '/' render = {() => ( 
            <Nav />

           )}/> 
        </Switch>
      </div>
    );
  }
}

export default App;
export { App }; //For unit testing with Enzyme shallow renders