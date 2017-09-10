import React, { Component } from 'react';

import { FLICKR_CDN } from './api';

class Photoview extends Component {  
  render() {
    console.log('Photoview.props: ', this.props);
    const { shown } = this.props;
    const { farm, server, id, secret, title } = this.props.photo;
    const size = '_b';
    const imgURL = FLICKR_CDN(farm, server, id, secret, size);

    return (
      <div
        style={{
          display: 'none',

        }}  

        { ...shown && {
          style: { 
            display: 'block', 
            position: 'fixed',
            top: '0',
            height: '100%',
            width: '100%',
            overflow: 'scroll',
            background: 'rgba(0, 0, 0, 0.85)',

          }
        }}
      >
        <img 
          src={ imgURL }
          style={{ 
            marginTop: '2%',
            height: '85%', 
            
          }}
        />
      </div>
    );
  }
}

export default Photoview;