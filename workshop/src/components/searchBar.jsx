import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="form-search">
        <input type="text" placeholder="Search GIF"/>
      </div>
    );
  }
}

export default SearchBar;