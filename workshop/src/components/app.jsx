import React, { Component } from 'react';
import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedId: "gG6OcTSRWaSis",
      ids: ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm"]
    };
  }

  changeSelectedGif = (newId) => {
    this.setState({
      selectedId: newId
    });
  }

  changeGifIds = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({ ids: res.data.map(gif => gif.id) });
    });
  }

  render() {
    const { ids, selectedId } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar changeGifIds={this.changeGifIds}/>
          <div className="selected-gif">
            <Gif id={selectedId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList ids={ids} changeSelectedGif={this.changeSelectedGif}/>
        </div>
      </div>
    )
  }
};

export default App;