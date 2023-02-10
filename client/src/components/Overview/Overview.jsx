import React, {useState, useEffect} from 'react';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import axios from 'axios';

const Overview = ({productId, total, avgStar, logInteraction}) => {
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(productStyles[0]);
  const [selectedSku, setSelectedSku] = useState(null);


  const getProductStyles = () =>{
    let url = (`/products/${productId}/styles`);
    axios(url)
      .then(({ data }) => {
        setProductStyles(data.results);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };

  useEffect(()=> {
    getProductStyles();
  }, []);

  return (
    <div id='overview'>
      <ImageGallery currentStyle={currentStyle}
        logInteraction={logInteraction}/>
      <div className='product-information'>
        <ProductInformation
          productId={productId}
          currentStyle = {currentStyle}
          total= {total}
          avgStar={avgStar}
          logInteraction={logInteraction}/>
        {productStyles ? <StyleSelector
          productId={productId}
          productStyles = {productStyles}
          setCurrentStyle={setCurrentStyle}
          currentStyle = {currentStyle}
          setSelectedSku={setSelectedSku}
          logInteraction={logInteraction}
        /> : null}
        <AddToCart
          currentStyle = {currentStyle}
          selectedSku={selectedSku}
          setSelectedSku={setSelectedSku}
          logInteraction={logInteraction}/>
      </div>
    </div>
  );
};

export default Overview;