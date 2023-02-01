import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SumRating from './SumRating.jsx';
import ReviewsList from './ReviewsList.jsx';
import AddReview from './AddReview.jsx';

var RR = ({ productId }) => {
  const [meta, setMeta] = useState({});
  const [display, setDisplay] = useState([]);
  const [total, setTotal] = useState([]);
  const [sortFilter, setSortFilter] = useState('relevant');

  const getReviewMeta = () => {
    let url = '/reviews/meta';
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
  const getReviews = (page = 1, count = Number.MAX_SAFE_INTEGER, sort = sortFilter) => {
    //console.log('sort', sort);
    let url = '/reviews';
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

  var handleSort = (e) => {
    let selector = e.target.value;
    setSortFilter(selector);
  };


  //console.log('meta before ', meta);
  return (
    <div className='reviews'>
      <SumRating meta={meta} />
      <ReviewsList display={display} setDisplay = {setDisplay} total = {total} handleSort = {handleSort} reRenderList={getReviews}/>
      <AddReview productId={productId}/>
    </div>
  );
};
export default RR;