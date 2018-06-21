import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';

import { MBOX_TOKEN } from './api';

import { FLICKR_CDN } from './api';
import Photoview from './photo';

const Map = ReactMapboxGl({
  accessToken: MBOX_TOKEN,
});


class Mapview extends Component {
  handleFeatureClick = (event) => {
    const { index } = event.feature.properties
    const photo = this.props.photos[index]

    this.props.photoSetter( photo )

  }

  render() {
    const { photos, photo, shown, photoShow, clearPhoto } = this.props

    const { farm, server, id, secret, title } = photo;
    const size = '_q';
    const imgURL = FLICKR_CDN(farm, server, id, secret, size);

    return (
      <div>
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
          onClick={ clearPhoto }
        >
          <Layer
            type='symbol'
            id='marker'
            layout={{ 'icon-image': 'attraction-15' }}
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
          {photo.id && (
            <Popup
              anchor="bottom"
              coordinates={[photo.longitude, photo.latitude]}
              onClick={ photoShow }

            >
              <img 
                alt={ photo.title }
                src={ imgURL }

              />          
              <div
                style={{ width: '150px' }}
              >
                { photo.title }

              </div>
            </Popup>
          )}
        </Map>
        <Photoview 
          photo={ photo } 
          shown={ shown } 
          clickHandler={ clearPhoto }

        />
      </div>
    );
  }
}

export default Mapview;