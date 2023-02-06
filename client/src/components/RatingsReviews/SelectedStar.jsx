import React from 'react';

const SelectedStar = ({ stars, handleSortStar }) => {
  //console.log('selectedstar', stars);
  return (
    <div className='selected-star' onClick = {()=>handleSortStar(stars)}>
      <span>{stars} stars
        <span className = 'delete-selected'> ✕</span>

      </span>
    </div>

  );

};
export default SelectedStar;