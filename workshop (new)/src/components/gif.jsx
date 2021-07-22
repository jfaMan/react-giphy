import React from 'react';

const Gif = (props) => {
  const { id, changeSelectedGif } = props;
  const selectedGif = `https://media.giphy.com/media/${id}/giphy.gif`;

  const handleClick = () => {
    changeSelectedGif(id);
  };

  return (
    <img
      className="gif"
      src={selectedGif}
      alt="GIF"
      id={id} //Do I need this? Props.id is used to create the selectedGif so maybe not. Works either way.
      onClick={handleClick}
    />
  );
};

export default Gif;
