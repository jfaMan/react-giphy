import React from 'react';
// import SearchBar from 'searchBar';
import Gif from './gif';
import GifList from 'gifList';

const App = () => {
  return(
    <div>
      <div className="left-scene">

        <div className="selected-gif">
          <Gif />
        </div>
      </div>
      <div className="right-scene">
        <GifList />
      </div>
    </div>
  );
};

export default App;