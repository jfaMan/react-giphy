import React, {useState} from 'react';
// import SearchBar from 'searchBar';
import Gif from './gif';
import GifList from './gifList';

const App = () => {
  const [selectedId] = useState("gG6OcTSRWaSis");
  const [ids] = useState(["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm"]);
  return(
    <div>
      <div className="left-scene">

        <div className="selected-gif">
          <Gif id={selectedId}/>
        </div>
      </div>
      <div className="right-scene">
        <GifList ids={ids}/>
      </div>
    </div>
  );
};

export default App;