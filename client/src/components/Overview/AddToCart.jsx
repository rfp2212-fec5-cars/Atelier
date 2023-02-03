import React, {useState, useEffect} from 'react';
import SizeSelector from './Subcomponents/AddToCart/SizeSelector.jsx';
import QuantitySelector from './Subcomponents/AddToCart/QuantitySelector.jsx';


const AddToCart = ({currentStyle, selectedSku, setSelectedSku}) => {

  // const [selectedSku, setSelectedSku] = useState(null);


  return (
    <div>
      <div><b>ADD TO CART</b></div>
      {currentStyle &&
        <div><SizeSelector
          currentStyle= {currentStyle}
          setSelectedSku={setSelectedSku}
          selectedSku={selectedSku}/></div>
      }
      {currentStyle &&
        <div><QuantitySelector
          currentStyle={currentStyle}
          selectedSku={selectedSku}/></div>}
    </div>
  );
};

export default AddToCart;