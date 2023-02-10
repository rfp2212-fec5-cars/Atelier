import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SocialMediaButton from './Subcomponents/ProductInformation/SocialMediaButton.jsx';
import PriceDisplay from './Subcomponents/ProductInformation/PriceDisplay.jsx';
import Star from '../RatingsReviews/Star1.jsx';


const ProductInformation = ({productId, currentStyle, total, avgStar, logInteraction}) => {

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
    logInteraction({
      element: 'Star and Reviews',
      widget: 'Overview'});
    let reviews = document.getElementById('rr-header');
    reviews.scrollIntoView();
  };

  return (
    <div>
      <p id='product-category'>{ productInfo.category }</p>
      <h1 id='product-name'>{ productInfo.name }</h1>
      { currentStyle && <PriceDisplay currentStyle={currentStyle}/> }
      <div className='star-nav' onClick={scrollToReviews}>
        <Star rate={avgStar} />
        <p className='statusLink'>See all {total} reviews</p>
      </div>
      <p>{productInfo.description ? productInfo.description : null }</p>
      <SocialMediaButton />
    </div>
  );
};

export default ProductInformation;