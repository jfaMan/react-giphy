import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    const { changeGifIds } = props;
    const input = event.currentTarget.value;
    changeGifIds(input);
  };

  return (
    <div className="form-search">
      <input
        type="text"
        placeholder="Search GIF"
        onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
