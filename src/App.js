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

  containerDefault = {
    position: 'fixed',
    top: '1.5em',
    height: '100vh',
    width: '100vw',
    border: '0.25em solid black',

  }

  render() { 
    const { photos, photo, shown } = this.state
    const { containerDefault, setPhoto, photoShow, photoClick, setShowPhoto, photoClose } = this

    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/recent' render={ props => (
            <Sheetview {...props}            
              photos={ photos } 
              photo={ photo }
              shown={ shown }
              clearPhoto={ photoClose }
              photoClick={ pic => {
                this.photoClick( pic )
                
              }}
            />
          )}/>
          <Route path='/map' render={ props => (
            <Mapview
              containerStyle={ containerDefault }
              photos={ photos }
              photo={ photo }
              shown={ shown }
              clearPhoto={ photoClose } 
              photoSetter={ pic => {
                this.photoSetter( pic )

              }}
              photoShow={ photoShow }
    
            />
          )}/>
          <Route path='/' render={props => (
            <Home {...props} 
              photos={ photos } 
              photo={ photo }
              shown={ shown }
              photoClear={ photoClose }
              setPhoto={ pic => {
                this.photoSetter( pic )
                
              }}
              showPhoto={ photoShow }
              setShowPhoto={ photoClick }

            />
          )} /> 

        </Switch>
      </div>
    );
  }
}

export default App;