// Library.js


// Imported React Files
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Imported Styling

// Imported Components

// Imported Misc

// import Bookshelf from './Bookshelf'


class Library extends React.Component {
  render() {
    return (
      <Bookshelf />
      <Bookshelf />
      <Bookshelf />
    );
  }
};

export default Library   