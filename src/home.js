import React, { Component } from 'react';

import Mapview from './map';
import Sheetview from './sheet';

class Home extends Component {
  render() {    

    return (
      <div>
        <Mapview />
        <Sheetview photos={this.props.photos} photo={ this.props.photo }/>

      </div>
    );
  }
}

export default Home;