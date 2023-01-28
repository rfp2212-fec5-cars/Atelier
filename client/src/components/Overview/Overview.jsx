import React, {useState, useEffect} from 'react';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';


const Overview = () => (
  <div>
    <div> <ProductInformation/> </div>
    <div> <StyleSelector/> </div>
    <div> <AddToCart/> </div>
    <div> <ImageGallery/> </div>
  </div>
);

export default Overview;