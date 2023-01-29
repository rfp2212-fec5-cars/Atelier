import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import SumRating from './SumRating.jsx';

var RR = ({ productId }) => {
  const [meta, setMeta] = useState({});
  const getReviewMeta = () => {
    let url = 'http://localhost:3000/reviews/meta';
    axios.get(url, { params: { 'product_id': `${productId}` } })
      .then((results) => {
        console.log('get review meta', results.data);
        setMeta(results.data);
      })
      .catch((err) => {
        if (err) {
          console.log('get review meta err ', err.message);
        }
      });
  };
  const getReviews = (page = 1, count = 8) => {
    let url = 'http://localhost:3000/reviews';
    axios.get(url, { params: { 'product_id': `${productId}`, 'page': page, 'count': count } })
      .then((results) => {
        console.log('get reviews', results.data);
      })
      .catch((err) => {
        if (err) {
          console.log('get reviews err ', err.message);
        }
      });
  };
  useEffect(() => {
    getReviewMeta();
    getReviews();
  }, []);

  // <RatingList list = {list}/>
  // <AddRating />
  //<SumRating meta = {meta}/>


  console.log('meta before ', meta);
  return (
    <div className = 'reviews'>
      <h1>Hello from Ratings & Reviews</h1>
    </div>

  );
};
export default RR;