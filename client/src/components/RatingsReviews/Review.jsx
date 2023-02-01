import React from 'react';
import Star from './Star.jsx';

var Review = ({ review }) => {
  console.log('review', review);
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
    <div>
      <div className='reviewstar'><Star star={review.rating} /></div>
      <div className='userinfo'>
        <span className = 'username'>{review.reviewer_name},</span>
        <span className = 'reviewdate'>{date}</span>
      </div>
      <div className = 'reviewsummary'>{review.summary}</div>
      <div className = 'reviewbody'>{review.body}</div>


    </div>

  );
};
export default Review;