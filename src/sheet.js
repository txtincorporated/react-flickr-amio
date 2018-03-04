import React, { Component } from 'react';

import Photoset from './photos';
import Thumbdisplay from './thumb';
import Photoview from './photo';

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
  // PROBLEM: after carefully passing photos and photo down to Sheetview from App, you here decide to blow off picking them up in the conmponent that's actually supposed to hub them out to their consumer child components and instead of just passing state to them you first completely re-define it, in which case what was the point of passing it down to begin with?
  // TODO: `const FRESH_STATE` needs to be declared at App level with `photos` immediately updated on `componentWillMount` just as it now is; thence it will pass down props and receive bindings so that --  using FRESH_STATE -- it always resets at App level

  // state = FRESH_STATE;


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