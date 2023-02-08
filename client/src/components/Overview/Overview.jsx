import React, {useState, useEffect} from 'react';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import axios from 'axios';

const Overview = ({productId, total, avgStar}) => {
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(productStyles[0]);
  const [selectedSku, setSelectedSku] = useState(null);


  const getProductStyles = () =>{
    let url = (`/products/${productId}/styles`);
    axios(url)
      .then((result) => {
        console.log('styles for product', result.data.results);
        setProductStyles(result.data.results);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };

  useEffect(()=> {
    getProductStyles();
  }, []);

  // useEffect(()=> {
  //   console.log(currentStyle);
  // }, [currentStyle]);

  return (
    <div id='overview'>
      <div className = 'top-overview'>
        <ImageGallery
          currentStyle={currentStyle}/>
        <ProductInformation
          productId={productId}
          currentStyle = {currentStyle}
          total= {total}
          avgStar={avgStar}/>
      </div>
      <div className='bottom-overview'>
        <AddToCart
          currentStyle = {currentStyle}
          selectedSku={selectedSku}
          setSelectedSku={setSelectedSku}/>
        {productStyles ? <StyleSelector
          productId={productId}
          productStyles = {productStyles}
          setCurrentStyle={setCurrentStyle}
          currentStyle = {currentStyle}
          setSelectedSku={setSelectedSku}
        /> : null}
      </div>
    </div>
  );
};

export default Overview;