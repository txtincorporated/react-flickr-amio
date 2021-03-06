import React, { Component } from 'react';

import { FLICKR_CDN } from './api';

class Photoview extends Component {  

  render() {
    const { photo, shown, clickHandler } = this.props;
    const { farm, server, id, secret, title } = photo;
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
        {id && (
          <img 
            src={ imgURL }
            alt={ imgURL }
            style={{ 
              marginTop: '2%',
              height: '85%', 
              border: '1px solid rgba(105, 105, 105, 0.40)',
  
            }}
            onClick={ clickHandler }
          />

        )}
        <span>`${ title }`</span>
      </div>
    );
  }
}

export default Photoview;
export { Photoview };