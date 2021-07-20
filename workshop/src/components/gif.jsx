import React, { Component } from 'react';

class Gif extends Component {
  render(props) {
    const { id, handleClick } = this.props
    const url = `https://media.giphy.com/media/${id}/giphy.gif`
    return (
      <img
        src={url}
        alt="GIF"
        className="gif"
        id={id}
        onClick={handleClick}
      />
    );
  }
}

export default Gif;