import React from 'react';


var Sortstar = ({ k, rateStar, handleUserClick }) => {
  //console.log(k);
  //console.log(rateStar);
  const handleSortStar = ()=>{
    handleUserClick(k);
  };
  return (
    <div className='sortstar' onClick={handleSortStar}>
      <span>{k} Stars </span>
      <div className="greybar">
        <div className='greenbar' style={{ height: '1em', width: `${rateStar[k] + '%'}` }}></div>
      </div>
      <span>{rateStar[k]}</span>
    </div>
  );

};
export default Sortstar;