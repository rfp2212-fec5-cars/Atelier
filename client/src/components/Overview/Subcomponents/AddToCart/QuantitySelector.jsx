import React, {useState, useEffect} from 'react';

const QuantitySelector = ({currentStyle, selectedSku}) => {

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
    <div id='quantitySelector'>
      {selectedSku === null || selectedSku === 'Select Size' ?
        <select disabled>
          <option>-</option>
        </select>
        :
        <select id='realQuantity' defaultValue='1'>
          {Array.from(arrayOfQuantity).map((number, index) => {
            return <option value={index + 1} key={index + 1}>{index + 1}</option>;
          })}
        </select>
      }
    </div>
  );





};

export default QuantitySelector;