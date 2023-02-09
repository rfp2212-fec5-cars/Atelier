import React from 'react';

const Search = ({ search, setSearch}) => {
  return (
    <div>
      <input className='form-input search' id='RR-search' type='text' placeholder='Search reviews...' data-testid='search'
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