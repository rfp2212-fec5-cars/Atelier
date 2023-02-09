import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SumRating from './SumRating.jsx';
import ReviewsList from './ReviewsList.jsx';
import Search from './Search.jsx';


var RR = ({ productId, productName, handleRate, handleTotal, logInteraction}) => {
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
  const [search, setSearch] = useState('');


  const handleDisplay = () => {
    if (total.length >= 2) {
      setDisplay([total[0], total[1]]);
    } else if (total.length === 1) {
      setDisplay([total[0]]);
    } else {
      setDisplay([]);
    }
  };
  useEffect(() => {
    handleDisplay();
  }, [total]);

  const getReviewMeta = () => {
    let url = '/reviews/meta';
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


  const getReviews = (page = 1, count = Number.MAX_SAFE_INTEGER, sort = sortFilter) => {
    console.log('sort', sort);
    let url = '/reviews';
    axios.get(url, { params: { 'product_id': `${productId}`, 'page': page, 'count': count, 'sort': sort } })
      .then((results) => {
        console.log('get reviews', results.data);
        let temp = results.data.results;
        handleTotal(temp.length);
        setSum(temp);
        if (search === '' && sortStar.length === 0) { //the first time reload page
          setTotal(temp);
        }
        //sortFilter changes will invoke getReviews,then sum will be updated which will invoke handleSortAndSearch
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
    let temp = [];
    sortStar.forEach((stars) => {
      temp.push(stars);
    });
    //console.log('temp before', temp);
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === stars) {
        temp.splice(i, 1);
      }
    }
    //console.log('temp after', temp);
    setSortStar(temp);
  };

  //search reviews in current total
  const handleSortAndSearch = () => {
    let temp = [];

    if (search === '') {
      if (sortStar.length === 0) {
        sum.forEach((review) => {
          temp.push(review);
        });
      } else {
        sum.forEach((review) => {
          if (sortStar.includes(review.rating.toString())) {
            temp.push(review);
          }
        });
      }
    } else {
      if (sortStar.length === 0) {
        sum.forEach((review) => {
          if (review.body.toLowerCase().includes(search.toLowerCase())) {
            temp.push(review);
          }
        });
      } else {
        sum.forEach((review) => {
          if (review.body.toLowerCase().includes(search.toLowerCase()) && sortStar.includes(review.rating.toString())) {
            temp.push(review);
          }
        });
      }
    }
    setTotal(temp);
    //console.log('temp', temp);

  };

  //user may click stars mulitple times,can't push stars to sortStar if already exists
  const handleUserClick = (k) => {
    //can't assign sortStar to temp, or useEffect can't detect its changing.
    let temp = [];
    sortStar.forEach((stars) => {
      temp.push(stars);
    });
    if (!temp.includes(k)) {
      temp.push(k);
      setSortStar(temp);
    }
  };


  useEffect(() => {
    handleSortAndSearch();
  }, [search, sortStar, sum]);


  return (
    <div style={{ marginTop: '50px' }}>
      <h2>RATINGS & REVIEWS</h2>
      <Search search={search} setSearch={setSearch} logInteraction={logInteraction}/>
      <div id='ratings-reviews'>
        <SumRating meta={meta} handleUserClick={handleUserClick} sortStar={sortStar} handleSortStar={handleSortStar} handleRate={handleRate} logInteraction={logInteraction}/>
        <ReviewsList display={display} setDisplay={setDisplay} total={total} handleSort={handleSort} productName={productName} productId={productId} logInteraction={logInteraction}/>
      </div>
    </div>

  );
};
export default RR;
