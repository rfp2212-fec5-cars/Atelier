import React from 'react';

const Search = ({ search, setSearch, logInteraction}) => {
  return (
    <div>
      <input className='form-input search' id='RR-search' type='text' placeholder='Search reviews...' data-testid='search'
        onChange={e => {
          if (e.target.value.length >= 3) {
            setSearch(e.target.value);
          } else {
            setSearch('');
          }
          logInteraction({element: 'search reviews', widget: 'Ratings&Reviews'});
        }}
      />

    </div>
  );
};

export default Search;