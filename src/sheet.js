import React, { Component } from 'react';

import Photoset from './photos';
import Thumbdisplay from './thumb';
import Photoview from './photo';
import App from './App';

// const FRESH_STATE = {
//   photo: {
//     farm: '',
//     server: '',
//     id: '',
//     secret: '',
//     title: '',
//   },
//   shown: false,
// };

class Sheetview extends Component {
  // state = FRESH_STATE;

  handleClick = photo => {
    //  need to just pass up 
    
    // {
    // photo: { ...photo },
    // shown: true,
  
    // }

    App.photoClick( photo ); // undefined -- not properly exported
    
    //  to a method on the parent, that will either pass the object along and call the next parent method up, or, when it finally gets to the outermost scope, do

    // this.setState({
    // photo: { ...photo },
    // shown: true,

    // });
  }

  clearPhoto = () => {
    // this.setState(FRESH_STATE);
    
  }

  render() {
    return (
      <div>
        <Photoview 
          photo={ this.props.photo } 
          shown={ this.props.shown } 
          clickHandler={ () => this.clearPhoto() }

        />
        <Photoset>          
          {this.props.photos.map(photo => {
            return <Thumbdisplay 
              { ...photo } 
              photo={ this.props.photo }
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