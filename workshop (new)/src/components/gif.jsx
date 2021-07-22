import React from 'react';

const Gif = (props) => {
  const {id} = props;
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
      id={id} //Do I need this? Props.id is used to create the selectedGif so maybe not. Works either way.
      onClick={handleClick}
    />
  );
};

export default Gif;