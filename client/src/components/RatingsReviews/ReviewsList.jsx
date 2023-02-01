import React from 'react';
import Review from './Review.jsx';

var ReviewsList = ({display, total, handleSort})=>{
  return (
    <div id = 'reviewslist'>
      <div>{total} reviews, sorted by
        <select id = 'mySelect' onChange = {(e)=>{
          handleSort(e);
        }}>
          <option value = 'Relevant'>Relevant</option>
          <option value = 'Helpful'>Helpful</option>
          <option value = 'Newest'>Newest</option>
        </select>
      </div>
      {display.map((review, index)=>
        <Review review = {review} key = {index}/>)}
    </div>
  );
};
export default ReviewsList;