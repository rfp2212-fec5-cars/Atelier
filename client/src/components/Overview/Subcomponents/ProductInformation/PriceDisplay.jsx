import React, {useState, useEffect} from 'react';

const PriceDisplay = ({currentStyle}) => {

  let listPrice;
  if (currentStyle !== undefined) {
    if (currentStyle.sale_price) {
      listPrice = <div className ='price'><span className = 'salePrice'>${currentStyle.sale_price} </span> <s>{currentStyle.original_price}</s></div>;
    } else {
      listPrice = <div className ='price'>${currentStyle.original_price}</div>;
    }
  }

  return (
    <div>{listPrice}</div>
  );
};

export default PriceDisplay;