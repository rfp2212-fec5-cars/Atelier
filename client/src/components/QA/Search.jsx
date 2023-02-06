import React, { useState } from 'react';

const Search = ({ setSearch }) => {

  return (
    <form>
      <input
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
      />
    </form>
  );
}

export default Search;