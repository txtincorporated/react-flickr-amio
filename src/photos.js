import React, { Component } from 'react';

class Photoset extends Component {
  
  render() {
    return (
      <div>
        { this.props.children }

      </div>
    );
  }
}

export default Photoset;