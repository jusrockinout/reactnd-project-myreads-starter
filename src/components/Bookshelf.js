// Bookshelf.js


// Imported React Files
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Imported Styling

// Imported Components
// import Book from './Book'
// Imported Misc

class Bookshelf extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
};

export default Bookshelf