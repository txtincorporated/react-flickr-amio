import React, { Component } from 'react';

import Photoset from './photoset';
import Photodisplay from './photodisplay';

class Sheetview extends Component {

  render() {
    console.log('this.props.photos: ', this.props.photos);  
    debugger;

    return (
      <div>
        <Photoset>          
          {this.props.photos.map(photo => {
            return <Photodisplay { ...photo }/>;

          })}
        </Photoset> 
      </div>
    );
  }
}

export default Sheetview;