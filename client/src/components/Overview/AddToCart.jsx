import React, {useState, useEffect} from 'react';
import SizeSelector from './Subcomponents/AddToCart/SizeSelector.jsx';

const AddToCart = ({currentStyle}) => {


  return (
    <div>
      <div><b>ADD TO CART</b></div>
      {currentStyle && <div><SizeSelector currentStyle= {currentStyle}/></div>}
    </div>
  );
};

export default AddToCart;