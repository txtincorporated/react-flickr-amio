import React, { Component } from 'react';

import Photoset from './photos';
import Thumbdisplay from './thumb';
import Photoview from './photo';

class Sheetview extends Component {

  render() {
    return (
      <div>
        <Photoview 
          photo={ this.props.photo } 
          shown={ this.props.shown } 
          clickHandler={ () => this.props.clearPhoto() }

        />
        <Photoset>          
          {this.props.photos.map(photo => {
            return <Thumbdisplay 
              { ...photo } 
              photo={ this.props.photo }
              key={ photo.id }
              clickHandler={ () => this.props.photoClick(photo) }

            />;
          })}
        </Photoset> 
      </div>
    );
  }
}

export default Sheetview;