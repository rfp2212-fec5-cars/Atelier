import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SocialMediaButton from './Subcomponents/ProductInformation/SocialMediaButton.jsx';
import PriceDisplay from './Subcomponents/ProductInformation/PriceDisplay.jsx';
import Star from '../RatingsReviews/Star1.jsx';


const ProductInformation = ({productId, currentStyle, total, avgStar}) => {

  console.log(total, avgStar)

  const [productInfo, setProductInfo] = useState({});
  const getProductInfo = () =>{
    let url = `/products/${productId}`;
    axios(url)
      .then((results) => {
        setProductInfo(results.data);
      })
      .catch((err) =>{
        console.log('Error', err);
      });
  };

  useEffect(()=>{
    getProductInfo();
  }, []);

  //Star rating
  //Share on Social Media
  let ratings = () => {

  };

  const scrollToReviews = (event) => {
    let reviews = document.getElementById('ratings-reviews');
    console.log(reviews);
    reviews.scrollIntoView();
  };

  return (
    <div className='product-information'>
      <div><b>PRODUCT INFORMATION</b></div>
      <div className='star-nav' onClick={scrollToReviews}><Star rate={avgStar}/> Read all {total} reviews</div>
      <div>{productInfo.category}</div>
      <div>{productInfo.name}</div>
      {currentStyle && <div><PriceDisplay currentStyle={currentStyle}/></div>}
      <div>{productInfo.description ? productInfo.description : null }</div>
      <div><SocialMediaButton/></div>
    </div>
  );
};

export default ProductInformation;