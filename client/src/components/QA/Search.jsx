import React, { useState } from 'react';

const Search = ({ setSearch, logInteraction }) => {

  return (
    <form role='search'>
      <input
        aria-label='search'
        className='form-input search'
        type='text'
        placeholder='Have a Question? Search for answers...'
        onChange={e => {
          if (e.target.value.length >= 3) {
            setSearch(e.target.value);
          } else {
            setSearch('');
          }
        }}
        onClick={(e) => {
          e.preventDefault();
          logInteraction({
            element: 'Search',
            widget: 'Q&A'
          })
        }}
      />
    </form>
  );
}

export default Search;