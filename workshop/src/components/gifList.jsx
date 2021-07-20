import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render() {
    const { ids, handleClick } = this.props
    return (
      <div className="gif-list">
        {ids.map(id =>  <Gif id={id} key={id} handleClick={handleClick} />) }
      </div>
    );
  }
}

export default GifList;