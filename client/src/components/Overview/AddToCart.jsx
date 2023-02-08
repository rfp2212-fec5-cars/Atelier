import React, {useState, useEffect} from 'react';
import SizeSelector from './Subcomponents/AddToCart/SizeSelector.jsx';
import QuantitySelector from './Subcomponents/AddToCart/QuantitySelector.jsx';
import AddToCartButton from './Subcomponents/AddToCart/AddToCartButton.jsx';


const AddToCart = ({currentStyle, selectedSku, setSelectedSku}) => {


  const [noSize, setNoSize] = useState(false);

  return (
    <div id='add-to-cart'>
      <div><b>ADD TO CART</b></div>
      {noSize ? <p className='noSize'>Please select size</p> : null}
      {currentStyle &&
        <div><SizeSelector
          currentStyle= {currentStyle}
          setSelectedSku={setSelectedSku}
          selectedSku={selectedSku}
          setNoSize={setNoSize}/></div>
      }
      {currentStyle &&
        <div><QuantitySelector
          currentStyle={currentStyle}
          selectedSku={selectedSku}/></div>
      }
      {currentStyle &&
        <div><AddToCartButton
          currentStyle={currentStyle}
          selectedSku={selectedSku}
          setNoSize={setNoSize}/></div>}
    </div>
  );
};

export default AddToCart;