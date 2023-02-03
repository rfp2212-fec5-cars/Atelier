import React, {useState, useEffect} from 'react';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import axios from 'axios';

const Overview = ({productId}) => {
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(productStyles[0]);

  const getProductStyles = () =>{
    let url = (`/products/${productId}/styles`);
    axios(url)
      .then((result) => {
        // console.log('styles for product', result.data.results);
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
    <div>
      <div> <ImageGallery/> </div>
      <div> <ProductInformation
        productId={productId}
        currentStyle = {currentStyle}/>
      </div>
      <div> <StyleSelector
        productId={productId}
        productStyles = {productStyles}
        setCurrentStyle={setCurrentStyle}
        currentStyle = {currentStyle}
      /> </div>
      <div> <AddToCart
        currentStyle = {currentStyle}/> </div>
    </div>
  );
};

export default Overview;