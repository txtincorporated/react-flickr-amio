import React, { Component } from 'react';

import Photoset from './photos';
import Thumbdisplay from './thumb';
import Photoview from './photo';

class Sheetview extends Component {

  render() {
    const { photo, shown } = this.props;

    return (
      <div>
        <Photoview 
          photo={ photo } 
          shown={ shown } 
          clickHandler={ () => this.props.clearPhoto }

        />
        <Photoset>          
          {this.props.photos.map(pic => {
            return <Thumbdisplay 
              { ...pic } 
              photo={ pic }
              key={ pic.id }
              clickHandler={ this.props.photoClick }

            />;
          })}
        </Photoset> 
      </div>
    );
  }
}

export default Sheetview;