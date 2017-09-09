import React, { Component } from 'react';

import Photoset from './photos';
import Thumbdisplay from './thumb';

class Sheetview extends Component {
  handleClick = photo => {
    this.props.photo = photo;

  }

  render() {
    console.log('this.props.photos: ', this.props.photos);  

    return (
      <div>
        <Photoset>          
          {this.props.photos.map(photo => {
            return <Thumbdisplay 
              { ...photo } 
              key={ photo.id }
              onClick={ this.handleClick(photo) }
            />;

          })}
        </Photoset> 
      </div>
    );
  }
}

export default Sheetview;