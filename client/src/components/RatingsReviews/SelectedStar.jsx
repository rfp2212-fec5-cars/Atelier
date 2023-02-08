import React from 'react';

const SelectedStar = ({ stars, handleSortStar }) => {

  return (
    <div className='selected-star' onClick = {()=>handleSortStar(stars)} data-testid = 'selectedstar'>
      <span>{stars} stars
        <span className = 'delete-selected'> ✕</span>
      </span>
    </div>

  );

};
export default SelectedStar;