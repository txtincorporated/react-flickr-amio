import React, { Component } from 'react';

import Photoview from './photo';
import Photoset from './photos';
import Thumbdisplay from './thumb';

class Sheetview extends Component {
  render() {
    const { photos, photo, shown, photoClick, clearPhoto } = this.props;

    return (
      <div>
        <Photoview 
          photo={ photo } 
          shown={ shown } 
          clickHandler={ clearPhoto }

        />
        <Photoset>          
          {photos.map(pic => {
            return <Thumbdisplay 
              { ...pic } 
              photo={ pic }
              key={ pic.id }
              clickHandler={ () => {
                photoClick( pic )

              }}
            />;
          })}
        </Photoset> 
      </div>
    );
  }
}

export default Sheetview;
export { Sheetview };