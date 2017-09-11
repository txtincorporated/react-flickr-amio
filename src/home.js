import React, { Component } from 'react';

import Mapview from './map';
import Sheetview from './sheet';

class Home extends Component {
  render() {    
    return (
      <div>
        <Mapview containerStyle={{ top: '0', bottom: '0', width: '100%', }}/>
        <div
          style={{
            marginTop: '53vh',

          }}
        >
          <Sheetview photos={this.props.photos} photo={ this.props.photo }/>

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