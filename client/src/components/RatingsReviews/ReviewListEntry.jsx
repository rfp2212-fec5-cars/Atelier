import React, { useState, useEffect } from 'react';
import Star from './Star.jsx';
import ReviewPhoto from './ReviewPhoto.jsx';
import axios from 'axios';

var ReviewListEntry = ({ review, reRenderList }) => {
  console.log('single review', review);
  const [showMore, setShowMore] = useState(true);

  const markHelpful = (e) => {
    console.log('e target', e.target);
    let url = `/reviews/${review.review_id}/helpful`;
    axios.put(url, {params: {'review_id': review.review_id}})
      .then((results) => {
        //console.log('update review helpful status', results.status);
        reRenderList();
      })
      .catch((err) => {
        if (err) {
          console.error('update review helpful err ', err.message);
        }
      });
  };
  const reportReview = () => {
    let url = `/reviews/${review.review_id}/report`;
    axios.put(url, {params: {'review_id': review.review_id}})
      .then((results) => {
        //console.log('report review status', results.status);
        reRenderList();
      })
      .catch((err) => {
        if (err) {
          console.error('report review err ', err.message);
        }
      });
  };
  //flag indicate if the whole body's length need fold or not
  var flag = false;
  if (review.body.length > 250) {
    flag = true;
  }
  //format date
  let temp = new Date(review.date);
  let map = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  };
  let date = map[temp.getMonth()] + ' ' + temp.getDate() + ', ' + temp.getFullYear();

  return (
    <div className='singlereview'>
      <div className='reviewstar'><Star star={review.rating} /></div>
      <div className='userinfo'>
        <span className='username'>{review.reviewer_name},</span>
        <span className='reviewdate'>{date}</span>
      </div>
      {
        review.summary ? (<div className='reviewsummary'>{review.summary}</div>) : ''
      }
      <div className='reviewbody' >
        {showMore ? review.body.slice(0, 250) : review.body}
        {flag && <span className="read-or-hide" onClick={() => setShowMore(!showMore)} >
          {showMore ? '...show more' : 'fold'}
        </span>}
      </div>
      <div className='reviewphotos'>
        {review.photos.map((photo, index) =>
          <ReviewPhoto photo={photo} key={index} />)}
      </div>
      {
        review.recommend === true ? (<div>✓ I recommend this product</div>) : ''
      }
      {
        review.response !== null ? (
          <div className='sellerresponse'>
            <b>Response:</b>
            {review.response}
          </div>)
          : (<div></div>)
      }

      <div className='helpfulandreport'>
        <div className='helpful'>
          Was this review helpful?&nbsp;&nbsp;
          <span onClick = {markHelpful}>Yes {review.helpfulness}</span>
        </div>
        |
        <div className='report'>
          <span onClick = {reportReview}>Report</span>
        </div>
      </div>

    </div>

  );
};
export default ReviewListEntry;