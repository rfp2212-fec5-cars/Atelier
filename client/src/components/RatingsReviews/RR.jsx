import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SumRating from './SumRating.jsx';
import ReviewsList from './ReviewsList.jsx';


var RR = ({ productId, productName }) => {
  const [meta, setMeta] = useState({});
  const [display, setDisplay] = useState([]);
  //the total reviews of user select
  const [total, setTotal] = useState([]);
  //sortFilter can be relevantt, helpful and newest
  const [sortFilter, setSortFilter] = useState('relevant');
  //sortStar is the array of user clicked stars
  const [sortStar, setSortStar] = useState([]);
  //the whole reviews of this product_id
  const [sum, setSum] = useState([]);


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
    console.log('sort', sort);
    let url = '/reviews';
    axios.get(url, { params: { 'product_id': `${productId}`, 'page': page, 'count': count, 'sort': sort } })
      .then((results) => {
        console.log('get reviews', results.data);
        let temp = results.data.results;
        setSum(temp);
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
  }, [sortFilter]);

  const handleSort = (e) => {
    let selector = e.target.value;
    //console.log('selector', selector);
    setSortFilter(selector);
  };

  //show and delete the selected stars
  const handleSortStar = (stars) => {
    //console.log('handle sort star', stars);
    let temp = sortStar;
    //console.log('temp before', temp);
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === stars) {
        temp.splice(i, 1);
      }
    }
    //console.log('temp after', temp);
    setSortStar(temp);
    showSortResults();//reset sortStar, why can't automatically invoke showSortResults??
  };

  const handleUserClick = (k) => {
    let temp = [];
    temp.push(k);
    setSortStar(sortStar.concat(temp));
    //console.log('user click', sortStar.concat(temp));
  };
  const showSortResults = () => {
    //console.log('invoke showSortResults??');
    let temp = [];
    //console.log('sortStar in showSortResults', sortStar);
    sum.forEach((review) => {
      if (sortStar.length === 0) {
        temp.push(review);
      } else {
        if (sortStar.includes(review.rating.toString())) {
          temp.push(review);
        }
      }
    });
    setTotal(temp);
    if (temp.length >= 2) {
      setDisplay([temp[0], temp[1]]);
    } else if (temp.length === 1) {
      setDisplay([temp[0]]);
    }
  };
  useEffect(() => {
    showSortResults();
  }, [sortStar]);

  return (
    <div className='reviews'>
      <SumRating meta={meta} handleUserClick={handleUserClick} sortStar={sortStar} handleSortStar={handleSortStar} />
      <ReviewsList display={display} setDisplay={setDisplay} total={total} handleSort={handleSort} productName={productName} productId={productId} />
    </div>
  );
};
export default RR;
