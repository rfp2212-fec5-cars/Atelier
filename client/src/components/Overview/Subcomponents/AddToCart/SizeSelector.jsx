import React, {useState, useEffect} from 'react';

const SizeSelector = ({currentStyle, setSelectedSku, selectedSku, setNoSize}) => {

  const [styleSkus, setStyleSkus] = useState(Object.entries(currentStyle.skus));

  useEffect(()=>{
    setStyleSkus(Object.entries(currentStyle.skus));
  }, [currentStyle]);

  const outOfStock = () => {
    let skuStock = Object.values(currentStyle.skus);
    return skuStock.every((element) => {
      return element.quantity === 0;
    });
  };

  const changeSizeHandler = (event) => {
    setSelectedSku(event.target.value);
    setNoSize(false);
    let size = document.getElementById('size');
    size.size = 1;
    if (document.getElementById('realQuantity')) {
      document.getElementById('realQuantity').value = '1';
    }
  };

  return (
    <div id='sizeSelector'>
      {outOfStock() ?
        <select onChange={changeSizeHandler} disabled>
          <option data-testid='size' value="Out of Stock" >OUT OF STOCK</option>
        </select>
        :
        <select id='size' onChange={changeSizeHandler}>
          <option data-testid='size' value= 'Select Size' >Select Size</option>
          {styleSkus.map((style) => {
            if (style[1].quantity > 0) {
              return <option value={style[0]} key={style[0]}>{style[1].size}</option>;
            }
          })}
        </select>}
    </div>
  );
};

export default SizeSelector;