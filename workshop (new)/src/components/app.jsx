import React, {useState} from 'react';
import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  const [selectedId, setSelectedId] = useState("gG6OcTSRWaSis");
  const [ids, setSelectedIds] = useState(["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm"]);

  const changeSelectedGif = (newId) => {
    setSelectedId(newId)
  };



  const changeGifIds = (keyword) => {
      giphy.search({
        q: keyword,
        rating: 'g',
        limit: 10
      }, (err, res) => {
        setSelectedIds(res.data.map(gif => gif.id));
      });
  };

  return(
    <div>
      <div className="left-scene">
          <SearchBar changeGifIds={changeGifIds}/>
        <div className="selected-gif">
          <Gif id={selectedId}/>
        </div>
      </div>
      <div className="right-scene">
        <GifList ids={ids} changeSelectedGif={changeSelectedGif}/>
      </div>
    </div>
  );
};

export default App;