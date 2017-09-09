import React, { Component } from 'react';

import Photoset from './photos';
import Thumbdisplay from './thumb';
import Photoview from './photo';

class Sheetview extends Component {
  state = {
    photo: null,
    shown: false,
  }

  handleClick = photo => {
    console.log('photo: ', photo);
    this.setState({
      photo: photo,
      shown: true,

    });
  }

  render() {
    console.log('this.props.photos: ', this.props.photos);  

    return (
      <div>
        <Photoview photo={ this.state.photo } shown={ this.state.shown } />
        <Photoset>          
          {this.props.photos.map(photo => {
            return <Thumbdisplay 
              { ...photo } 
              key={ photo.id }
              clickHandler={ () => this.handleClick(photo) }

            />;
          })}
        </Photoset> 
      </div>
    );
  }
}

export default Sheetview;