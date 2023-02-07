import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AddToCartButton = ({currentStyle, selectedSku, setNoSize}) => {

  console.log(currentStyle)

  const outOfStock = () => {
    let skuStock = Object.values(currentStyle.skus);
    return skuStock.every((element) => {
      return element.quantity === 0;
    });
  };

  const handleClick = (event) => {
    if (selectedSku === null || selectedSku === 'Select Size') {
      setNoSize(true);
      let size = document.getElementById('size');
      size.size = 5;
    } else {
      axios
        .post('/cart', {'sku_id': selectedSku})
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // console.log(outOfStock());
  return (
    <div data-testid='cart-button'>
      {outOfStock() ? null : <button onClick = {handleClick}>Add To Cart</button>}
    </div>
  );
};


export default AddToCartButton;