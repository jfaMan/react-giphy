import React, { Component } from 'react';

class Gif extends Component {
  render(props) {
    const { id } = this.props
    const url = `https://media.giphy.com/media/${id}/giphy.gif`
    return (
      <img
        src={url}
        alt="GIF"
        className="gif"
        key="id"
      />
    );
  }
}

export default Gif;