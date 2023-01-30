import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SocialMediaButton from './Subcomponents/ProductInformation/SocialMediaButton.jsx';


const ProductInformation = ({productId}) => {

  const [productInfo, setProductInfo] = useState({});
  const getProductInfo = () =>{
    let url = `/products/${productId}`;
    axios(url)
      .then((results) => {
        setProductInfo(results.data);
        // console.log('ProductInfo Results', results.data);
      })
      .catch((err) =>{
        console.log('Error', err);
      });
  };

  useEffect(()=>{
    getProductInfo();
  }, []);

  //Star rating
  //Product Category
  console.log(productInfo.category);
  //Product Title
  console.log(productInfo.name);
  //Price
  console.log(productInfo.default_price);
  //Product Overview
  console.log(productInfo.description);
  //Share on Social Media

  let ratings = () => {

  };

  const scrollToReviews = () => {
    document.getElementsByClassName('reviews').scrollIntoView();
  };

  return (
    <div className='productInformation'>
      <p>I'm Product Information</p>
      <div onClick={scrollToReviews}>Stars, Link to Reviews</div>
      <div>{productInfo.category}</div>
      <div>{productInfo.name}</div>
      <div>${productInfo.default_price}</div>
      <div>{productInfo.description ? productInfo.description : null }</div>
      <div><SocialMediaButton/></div>
    </div>
  );
};

export default ProductInformation;