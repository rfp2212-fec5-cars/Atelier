import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SocialMediaButton from './Subcomponents/ProductInformation/SocialMediaButton.jsx';
import PriceDisplay from './Subcomponents/ProductInformation/PriceDisplay.jsx';


const ProductInformation = ({productId, currentStyle}) => {

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
    let reviews = document.getElementsByClassName('reviews');
    console.log(reviews);
    reviews[0].scrollIntoView();
  };

  return (
    <div className='productInformation'>
      <div><b>PRODUCT INFORMATION</b></div>
      <div onClick={scrollToReviews}>Stars, Link to Reviews</div>
      <div>{productInfo.category}</div>
      <div>{productInfo.name}</div>
      <div><PriceDisplay currentStyle={currentStyle}/></div>
      <div>{productInfo.description ? productInfo.description : null }</div>
      <div><SocialMediaButton/></div>
    </div>
  );
};

export default ProductInformation;