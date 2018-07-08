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
    const pic = this.props.photos[index]

    this.props.photoSetter( pic )

  }

  render() {
    const { photos, photo, shown, clearPhoto, setPhoto, showPhoto, } = this.props
    const { farm, server, id, secret, title } = photo;
    const size = '_q';
    const imgURL = FLICKR_CDN(farm, server, id, secret, size);

    return (
      <div>
        <Map
        // eslint-disable-next-line
          style={'mapbox://styles/mapbox/outdoors-v10'}
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
          {id && (
            <Popup
              anchor="bottom"
              coordinates={[photo.longitude, photo.latitude]}
              onClick={ showPhoto }

            >
              <img 
                alt={ title }
                src={ imgURL }

              />          
              <div
                style={{ width: '150px' }}
              >
                { title }

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