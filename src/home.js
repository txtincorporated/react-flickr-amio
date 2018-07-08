import React, { Component } from 'react';

import Mapview from './map';
import Sheetview from './sheet';

class Home extends Component {
  render() {
    const { photos, photo, shown, setPhoto, showPhoto, setShowPhoto, photoClear } = this.props

    return (
      <div>
        <Mapview
          containerStyle={{
            position: 'fixed',
            top: '1.5em',
            height: '60vh',
            width: '100vw',
            border: '0.25em solid black',

          }}
          photos={ photos }
          photo={ photo }
          shown={ shown }
          clearPhoto={ photoClear } 
          photoSetter={ setPhoto }
          photoShow={ showPhoto }

        />
        <div
          style={{
            marginTop: '63vh',
          }}
        >
          <Sheetview
            photos={ photos } 
            photo={ photo }
            shown={ shown }
            photoClick={ setShowPhoto }
            clearPhoto={ photoClear } 
          
          />
        </div>

        <div style={{ 
          position: 'fixed',
          bottom: '0',
          margin: '0 0 0 -40%',
          right: '50%',
          color: 'rgba(255, 255, 255, 0.5)', 
          fontSize: '0.5em'
        }}>
          ©Nathan P. Keene 2017
        </div>
      </div>
    );
  }
}

export default Home;