import React, {useState, useEffect} from 'react';

const SizeSelector = ({currentStyle, setSelectedSku, selectedSku}) => {



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

  const changeSizeHandler = (event) => {
    setSelectedSku(event.target.value);
    if (document.getElementById('realQuantity')) {
      document.getElementById('realQuantity').value = '1';
    }
  };

  useEffect(() => {
    console.log(selectedSku);
  }, [selectedSku]);

  return (
    <div id='sizeSelector'>
      {inStock() ?
        <select onChange={changeSizeHandler} disabled>
          <option value={null} >OUT OF STOCK</option>
        </select>
        :
        <select onChange={changeSizeHandler}>
          <option value= {null} >Select Size</option>
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