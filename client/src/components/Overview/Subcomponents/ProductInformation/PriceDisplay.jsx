import React, {useState, useEffect} from 'react';

const PriceDisplay = ({currentStyle}) => {
  return <div data-testid = "price">
    <div className='price'>
      {currentStyle.sale_price ?
        <s> ${currentStyle.original_price}</s>
        :
        <span>${currentStyle.original_price}</span>
      }
      {currentStyle.sale_price &&
        <span className='salePrice'>
          ${currentStyle.sale_price}
        </span>
      }
    </div>
  </div>;
};

export default PriceDisplay;