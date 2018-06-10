import React, { Component } from 'react';

import Mapview from './map';
import Sheetview from './sheet';
import App from './App';

class Home extends Component {
  render() {
    const { photos, photo, shown, photoClear, showPhoto } = this.props

    return (
      <div>
        <Mapview containerStyle={{ top: '0', bottom: '0', width: '100%', }}/>
        <div style={{ marginTop: '53vh' }}>
          <Sheetview
            photos={ photos } 
            photo={ photo }
            shown={ shown }
            clearPhoto={ photoClear } 
            photoClick={ showPhoto }
          
          />
        </div>

        <div style={{ 
          position: 'fixed',
          bottom: '0',
          margin: '0 0 0 -40%',
          right: '50%',
          color: 'rgba(255, 255, 255, 0.5)', 
          fontSize: '0.5em'
        }}>©Nathan P. Keene 2017
        </div>
      </div>
    );
  }
}

export default Home;