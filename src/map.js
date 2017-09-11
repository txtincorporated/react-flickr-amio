import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import { MBOX_TOKEN } from './api';

const Map = ReactMapboxGl({
  accessToken:  MBOX_TOKEN,

});

class Mapview extends Component {
  render() {
    return (
      <div>
        <Map
          style='mapbox://styles/mapbox/outdoors-v10'
          containerStyle={{
            position: 'fixed',
            top: '1.5em',  
            height: '50vh',
            width: '100vw',
            border: '0.25em solid black',

          }}
        >
          <Layer
            type='symbol'
            id='marker'
            layout={{ 'icon-image': 'marker-15' }}

          >
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>

          </Layer>
        </Map>
      </div>
    );
  }
}

export default Mapview;