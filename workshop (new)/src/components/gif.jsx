import React from 'react';

const Gif = (props) => {
  const { id, changeSelectedGif } = props;
  const selectedGif = `https://media.giphy.com/media/${id}/giphy.gif`;

  const handleClick = (event) => {
    const {id, changeSelectedGif} = props;
    changeSelectedGif(id);
  };

  return(
    <img
      className="gif"
      src={selectedGif}
      alt="GIF"
      onClick={handleClick}
    />
  );
};

export default Gif;