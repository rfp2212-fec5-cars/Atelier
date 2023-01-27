import React, { useState } from 'react';

const Search = () => {
  const [entry, setEntry] = useState('');

  return (
    <form>
      <input
        type='text'
        placeholder='Have a Question? Search for answers...'
        value={ entry }
        onChange={e => setEntry(e.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  );
}

export default Search;