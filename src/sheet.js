import React, { Component } from 'react';

import Photoset from './photoset';
import Thumbdisplay from './thumbdisplay';

class Sheetview extends Component {

  render() {
    console.log('this.props.photos: ', this.props.photos);  
    // debugger;

    return (
      <div>
        <Photoset>          
          {this.props.photos.map(photo => {
            return <Thumbdisplay { ...photo } key={ photo.id }/>;

          })}
        </Photoset> 
      </div>
    );
  }
}

export default Sheetview;