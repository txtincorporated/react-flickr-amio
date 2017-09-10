import React, { Component } from 'react';

import Photoset from './photos';
import Thumbdisplay from './thumb';
import Photoview from './photo';

const FRESH_STATE = {
  photo: {
    farm: '',
    server: '',
    id: '',
    secret: '',
    title: '',
  },
  shown: false,
};

class Sheetview extends Component {
  state = FRESH_STATE;

  handleClick = photo => {
    this.setState({
      photo: { ...photo },
      shown: true,

    });
  }

  clearPhoto = () => {
    this.setState(FRESH_STATE);
    
  }

  render() {
    return (
      <div>
        <Photoview 
          photo={ this.state.photo } 
          shown={ this.state.shown } 
          clickHandler={ () => this.clearPhoto() }

        />
        <Photoset>          
          {this.props.photos.map(photo => {
            return <Thumbdisplay 
              { ...photo } 
              photo={ this.state.photo }
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