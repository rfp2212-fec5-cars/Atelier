import React from 'react';

const SelectedStar = ({ stars, handleSortStar, logInteraction}) => {

  return (
    <div className='selected-star' onClick = {()=>{
      handleSortStar(stars);
      logInteraction({element: 'delete chosen stars', widget: 'Ratings&Reviews'});
    }} data-testid = 'selectedstar'>
      <span>{stars} stars
        <span className = 'delete-selected'> ✕</span>
      </span>
    </div>

  );

};
export default SelectedStar;