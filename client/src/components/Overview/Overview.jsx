import React, {useState, useEffect} from 'react';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';


const Overview = ({productId}) => (
  <div>
    <div> <ProductInformation productId={productId}/> </div>
    <div> <StyleSelector productId={productId}/> </div>
    <div> <AddToCart/> </div>
    <div> <ImageGallery/> </div>
  </div>
);

export default Overview;