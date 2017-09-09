import React, { Component } from 'react';

import { FLICKR_CDN } from './api';

class Photoview extends Component {
  render() {
    const { shown } = this.props;
    const { farm, server, id, secret, title } = this.props;
    const size = '_b';
    const imgURL = FLICKR_CDN(farm, server, id, secret, size);
    
    return (
      <div
        { ...shown && {style: { display: 'block' }}}

        style={{
          display: 'none',
          position: 'fixed',
          height: ' 100%',
          width: '100%',
          background: 'black',

        }}  
      >
        <img src={{ imgURL }}/>
      </div>
    );
  }
}

export default Photoview;