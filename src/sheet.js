import React, { Component } from 'react';

import Photoset from './photoset';
import Photodisplay from './photodisplay';

class Sheetview extends Component {

  render() {    
    return (
      <div>
        <Photoset>          
          {this.state.photos.map(photo => {
            return <Photodisplay { ...photo }/>;

          })}
        </Photoset> 
      </div>
    );
  }
}

export default Sheetview;