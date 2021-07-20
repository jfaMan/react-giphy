import React, { Component } from 'react';

class SearchBar extends Component {
  onChange = (event) => {
    const { changeGifIds } = this.props;
    const keyword = event.currentTarget.value;
    changeGifIds(keyword);
  }

  render() {
    const { onChange } = this.props;
    return (
      <div className="form-search">
        <input type="text" placeholder="Search GIF" onChange={this.onChange}/>
      </div>
    );
  }
}

export default SearchBar;