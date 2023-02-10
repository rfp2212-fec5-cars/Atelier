import React from 'react';


var Sortstar = ({ k, rateStar, handleUserClick, logInteraction}) => {
  //console.log(k);
  // console.log(rateStar);
  return (
    <div className='sortstar' onClick={()=>{
      handleUserClick(k);
      logInteraction({element: 'choose filter stars', widget: 'Ratings&Reviews'});
    }} data-testid = 'sortstar'>
      <div className ='stars-text'>{k} Stars </div>
      <div className="greybar">
        <div className='greenbar' style={{ height: '1em', width: `${rateStar[k] + '%'}` }}></div>
      </div>
    </div>
  );

};
export default Sortstar;