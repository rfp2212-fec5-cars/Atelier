import React from 'react';


var Sortstar = ({ k, rateStar, handleUserClick }) => {
  //console.log(k);
  // console.log(rateStar);
  return (
    <div className='sortstar' onClick={()=>handleUserClick(k)} data-testid = 'sortstar'>
      <span>{k} Stars </span>
      <div className="greybar">
        <div className='greenbar' style={{ height: '1em', width: `${rateStar[k] + '%'}` }}></div>
      </div>
    </div>
  );

};
export default Sortstar;