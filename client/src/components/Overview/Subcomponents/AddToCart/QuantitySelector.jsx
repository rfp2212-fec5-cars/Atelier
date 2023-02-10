import React, {useState, useEffect} from 'react';

const QuantitySelector = ({currentStyle, selectedSku, logInteraction}) => {

  let skus = Object.entries(currentStyle.skus);
  let quantityForSku = null;
  skus.forEach((sku) => {
    if (sku[0] === selectedSku) {
      quantityForSku = sku[1].quantity;
    }
  });
  let arrayOfQuantity = [];
  arrayOfQuantity = quantityForSku < 15 ? Array(quantityForSku) : Array(15);

  return (
    <div id='quantity-selector'>
      {selectedSku === null || selectedSku === 'Select Size' ?
        <select disabled>
          <option>-</option>
        </select>
        :
        <select data-testid='quantity-selector' id='realQuantity' defaultValue='1' onClick={()=> logInteraction({
          element: 'quantity-selector',
          widget: 'Overview'})}>
          {Array.from(arrayOfQuantity).map((number, index) => {
            return <option value={index + 1} key={index + 1}>{index + 1}</option>;
          })}
        </select>
      }
    </div>
  );
};

export default QuantitySelector;