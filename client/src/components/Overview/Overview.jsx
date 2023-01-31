import React, {useState, useEffect} from 'react';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import axios from 'axios';


const Overview = ({productId}) => {
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(productStyles[1]);

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


  return (
    <div>
      <div> <ImageGallery/> </div>
      <div> <ProductInformation productId={productId} currentStyle = {currentStyle}/> </div>
      <div> <StyleSelector
        productId={productId}
        productStyles = {productStyles}
        setCurrentStyle={setCurrentStyle}
      /> </div>
      <div> <AddToCart/> </div>
    </div>
  );
};

export default Overview;