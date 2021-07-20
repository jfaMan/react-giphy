import React, { Component } from 'react';
import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedId: "gG6OcTSRWaSis",
      ids: ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm"]
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const newId = event.currentTarget.id;
    this.setState({ selectedId: newId });
  }

  render() {
    const { ids, selectedId } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={selectedId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList ids={ids} handleClick={this.handleClick}/>
        </div>
      </div>
    )
  }
};

export default App;