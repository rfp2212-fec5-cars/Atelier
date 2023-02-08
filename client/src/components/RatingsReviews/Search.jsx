import React from 'react';

const Search = ({ search, setSearch}) => {
  return (
    <div>
      <input id='RR-search' type='text' value={search} placeholder='search reviews' data-testid='search'
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