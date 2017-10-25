import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';

import { MBOX_TOKEN } from './api';

const Map = ReactMapboxGl({
  accessToken:  MBOX_TOKEN,

});

class Mapview extends Component {
  handleClick = () => {
    console.log('handleClick');
    return(
      <Popup 
        
      >
        <h1>POPUP</h1>
        
      </Popup>
    ); 
  }

  render() {
    return (
      <div>
        <Map
          style='mapbox://styles/mapbox/outdoors-v10'
          center={[-180, 30]}
          zoom={[1.4875]}
          containerStyle={{
            position: 'fixed',
            top: '1.5em',  
            height: '60vh',
            width: '100vw',
            border: '0.25em solid black',

          }}
          clickHandler={ () => this.handleClick() }
        >
          <Layer
            type='symbol'
            id='marker'
            layout={{ 'icon-image': 'harbor-15' }}
            onClick={ this.props.clickHandler }
          >
            <Popup 
              coordinates={[ -0.481747846041145, 51.3233379650232 ]}
              description={'This is a popup, yo.'}
            >  
              <h1>POPUP!</h1>
            </Popup>
          </Layer>
        </Map>
      </div>
    );
  }
}

export default Mapview;