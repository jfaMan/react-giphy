import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  const {ids, changeSelectedGif} = props;
  return(
    <div className="gif-list">
      {ids.map(id => <Gif id={id} key={id} changeSelectedGif={changeSelectedGif} />)}
    </div>
  );
};

export default GifList;


// DOESNT WORK
// {ids.map(id => {
//   <Gif id={id} key={id} />;
// })}
// </div>