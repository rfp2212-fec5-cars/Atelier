import React from 'react';

const Search = ({ setSearch }) => {
  return (
    <div>
      <input id='RR-search' type='text' placeholder='search reviews'
        onChange={e => {
          if (e.target.value.length >= 3) {
            setSearch(e.target.value);
          } else {
            setSearch('');
          }
        }}
      />

    </div>
  );
};

export default Search;