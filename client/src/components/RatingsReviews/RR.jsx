import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SumRating from './SumRating.jsx';
import ReviewsList from './ReviewsList.jsx';

var RR = ({ productId }) => {
  const [meta, setMeta] = useState({});
  const [display, setDisplay] = useState([]);
  const [total, setTotal] = useState(0);
  const [sort, setSort] = useState('relevant');

  const getReviewMeta = () => {
    let url = 'http://localhost:3000/reviews/meta';
    axios.get(url, { params: { 'product_id': `${productId}` } })
      .then((results) => {
        //console.log('get review meta', results.data);
        setMeta(results.data);
      })
      .catch((err) => {
        if (err) {
          console.log('get review meta err ', err.message);
        }
      });
  };
  const getReviews = (page = 1, count = Number.MAX_SAFE_INTEGER, sort = {sort}) => {
    console.log('count', count);
    let url = 'http://localhost:3000/reviews';
    axios.get(url, { params: { 'product_id': `${productId}`, 'page': page, 'count': count, 'sort': sort } })
      .then((results) => {
        console.log('get reviews', results.data);
        let temp = results.data.results;
        setTotal(temp);
        if (temp.length >= 2) {
          setDisplay([temp[0], temp[1]]);
        } else if (temp.length === 1) {
          setDisplay([temp[0]]);
        }
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
  var handleMoreReviews = () => {


  };
  var handleSort = (e) => {
    let selector = e.target.value;
    setSort(selector);
  };


  //console.log('meta before ', meta);
  return (
    <div className='reviews'>
      <SumRating meta={meta} />
      <ReviewsList display={display} total = {total.length} handleSort = {handleSort}/>
    </div>

  );
};
export default RR;