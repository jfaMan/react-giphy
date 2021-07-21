import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  console.log(ids)
  return(
    <div className="gif-list">
      {ids.map(id => <Gif id={id} key={id} />)}
    </div>
  );
};

export default GifList;


// DOESNT WORK
// {ids.map(id => {
//   <Gif id={id} key={id} />;
// })}
// </div>