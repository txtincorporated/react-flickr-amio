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
        <div>
          <div style={{ display: 'inline', }}>
            <Link to={ '/' }>
              Home

            </Link>
          </div>
          <div style={{ display: 'inline', }}>
            <Link to={ '/map' }>
              Map

            </Link>
          </div>
          <div style={{ display: 'inline', }}>
            <Link to={ '/recent' }>
              Recent

            </Link>
          </div>
        </div>
      
      </div>
    );
  }
}

export default Nav;