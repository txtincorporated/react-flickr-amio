import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';

import { MBOX_TOKEN } from './api';

const Map = ReactMapboxGl({
  accessToken: MBOX_TOKEN,
});

class Mapview extends Component {
  state = {
    photo: null,
  }

  handleFeatureClick = (event) => {
    const { index } = event.feature.properties
    const photo = this.props.photos[index]

    this.setState({ photo })
  }

  handlePopupClick = () => {
    this.setState({ photo: null })
  }

  render() {
    const { photos } = this.props
    const { photo } = this.state

    return (
      <Map
        style='mapbox://styles/mapbox/outdoors-v10'
        zoom={[1.4875]}
        containerStyle={{
          position: 'fixed',
          top: '1.5em',
          height: '60vh',
          width: '100vw',
          border: '0.25em solid black',
        }}
      >
        <Layer
          type='symbol'
          id='marker'
          layout={{ 'icon-image': 'harbor-15' }}
        >
          {photos.map((photo, index) => (
            <Feature
              key={photo.id}
              coordinates={[photo.longitude, photo.latitude]}
              properties={{ index }}
              onClick={this.handleFeatureClick}
            />
          ))}
        </Layer>
        {photo && (
          <Popup
            anchor="bottom"
            coordinates={[photo.longitude, photo.latitude]}
            onClick={this.handlePopupClick}
          >
            {photo.title}
          </Popup>
        )}
      </Map>
    );
  }
}

export default Mapview;