import React, {useState, useEffect} from 'react';

const SizeSelector = ({currentStyle}) => {



  // console.log('CurrentStyle and SKUs', currentStyle);


  const [styleSkus, setStyleSkus] = useState(Object.entries(currentStyle.skus));
  useEffect(()=>{
    setStyleSkus(Object.entries(currentStyle.skus));
  }, [currentStyle]);

  const inStock = () => {
    let skuStock = Object.values(currentStyle.skus);
    return skuStock.every((element) => {
      return element.quantity === 0;
    });
  };

  return (
    <div id='sizeSelector'>
      {inStock() ?
        <select disabled>
          <option>OUT OF STOCK</option>
        </select>
        :
        <select>
          <option value='Select Size'>Select Size</option>
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