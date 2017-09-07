import React, { Component } from 'react';

import Mapview from './map';
import Sheetview from './sheet';

class Home extends Component {
  render() {    
    // debugger;

    return (
      <div>
        <Mapview />
        <Sheetview photos={this.props.photos}/>

      </div>
    );
  }
}

export default Home;