import React, { Component } from 'react';

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
          <Link>
          Home
          
          </Link>
        </div>
        <div>
          <Link>
          Map
          
          </Link>
        </div>
        <div>
          <Link>
          Recent
          
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;