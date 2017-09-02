import React, { Component } from 'react';

import { FLICKR_CDN } from './api';

class Photodisplay extends Component {
  render() {
    const { farm, server, id, secret } = this.props;
    const buildURL = (farm, server, id, secret) => {
      const imgURL = FLICKR_CDN;
      return imgURL;

    };

    return (
      <div>
        <img 
          src={ buildURL() }
          style={{
            display:'inline-block', 
            width: 400,
            height: 400,

          }}
        />
        
      </div>
    );
  }
}

export default Photodisplay;