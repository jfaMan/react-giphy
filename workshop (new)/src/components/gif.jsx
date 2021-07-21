import React from 'react';

const Gif = (props) => {
  const { id } = props;
  const selectedGif = `https://media.giphy.com/media/${id}/giphy.gif`;
  return(
    <img
      className="gif"
      src={selectedGif}
      alt="GIF"
    />
  );
};

export default Gif;