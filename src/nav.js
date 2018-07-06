import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div 
        style={{ 
          position: 'fixed',
          top: '0',
          width: '100vw',
          background: 'black',
          color: 'white',

        }}
      >
        NAV
        <div>
          <Link to={ '/' }>
            Home

          </Link>
        </div>
        <div>
          <Link to={ '/map' }>
            Map

          </Link>
        </div>
        <div>
          <Link to={ '/recent' }>
            Recent

          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;