// Header.js


// Imported React Files
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Imported Styling

// Imported Components

// Imported Misc


class Header extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
};

export default Header   