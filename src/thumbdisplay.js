import React, { Component } from 'react';

import { FLICKR_CDN } from './api';

class Thumbdisplay extends Component {
  render() {
    const { farm, server, id, secret, title } = this.props;
    const size = '_q';
    const imgURL = FLICKR_CDN(farm, server, id, secret, size);
    
    return (
      <div
        style={{
          display:'inline-block', 
          marginLeft: '0.125em',
          marginRight: '0.125em',

        }}
      >
        <img 
          alt={ title }
          src={ imgURL }
        
        />
        
      </div>
    );
  }
}

export default Thumbdisplay;