import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';

import { MBOX_TOKEN } from './api';

import { FLICKR_CDN } from './api';
import Photoview from './photo';

const Map = ReactMapboxGl({
  accessToken: MBOX_TOKEN,
});

// const FRESH_STATE = {
//   photo: {
//     farm: '',
//     server: '',
//     id: '',
//     secret: '',
//     title: '',
//   },
//   shown: false,

// };

class Mapview extends Component {
  // state = FRESH_STATE
  pic = null

  handleFeatureClick = (event) => {
    const { index } = event.feature.properties
    const photo = this.props.photos[index]

    console.log('handleFeatureClick photo', photo );

    this.pic = photo 

  }

  handlePopupClick = photo => {
    this.setState({
      shown: true,
      
    });
  }

  // clearPhoto = () => {
  //   this.setState(FRESH_STATE);
    
  // }

  render() {
    const { photos, photo, shown, photoClear } = this.props
    // const { photo, shown } = this.state

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
          onClick={ photoClear }
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
              onClick={() => {
                this.props.photoClick( this.pic )

              }}

            >
              <img 
                alt={ photo.title }
                src={ imgURL }

              />          
              <div
                style={{width: '150px'}}
              >
                { photo.title }

              </div>
            </Popup>
          )}
        </Map>
        <Photoview 
          photo={ photo } 
          shown={ shown } 
          clickHandler={ photoClear }

        />
      </div>
    );
  }
}

export default Mapview;