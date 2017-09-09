import React, { Component } from 'react';

import Photoset from './photos';
import Thumbdisplay from './thumb';
import Photoview from './photo';

class Sheetview extends Component {
  state = {
    photo: null,

  }

  handleClick = e => {
    console.log('photo: ', e.target.photo);
    this.setState({
      photo: e.target.photo,
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
            {/* debugger; */}

            return <Thumbdisplay 
              { ...photo } 
              photo={ photo }
              key={ photo.id }
              onClick={ e => this.handleClick(e) }

            />;
          })}
        </Photoset> 
      </div>
    );
  }
}

export default Sheetview;