import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { id, changeSelectedGif } = this.props;
    changeSelectedGif(id);
  }

  render() {
    const { id } = this.props
    const url = `https://media.giphy.com/media/${id}/giphy.gif`
    return (
      <img
        src={url}
        alt="GIF"
        className="gif"
        id={id}
        onClick={this.handleClick}
      />
    );
  }
}

export default Gif;