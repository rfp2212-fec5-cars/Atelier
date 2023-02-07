import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import AddReview from './AddReview.jsx';


var ReviewsList = ({ display, setDisplay, total, handleSort, productName, productId}) => {
  let num = display.length;
  const handleMoreReviews = () => {
    num += 2;
    setDisplay(total.slice(0, num));
  };
  return (
    <div id='reviewswraper'>
      <div id='reviewslist'>
        <div>{total.length} reviews, sorted by &nbsp;
          <select id='mySelect' onChange={(e) => {
            handleSort(e);
          }}>
            <option value='relevant'>Relevant</option>
            <option value='helpful'>Helpful</option>
            <option value='newest'>Newest</option>
          </select>
        </div>
        <div id='reviewcontent'>
          {display.map((review, index) =>
            <ReviewListEntry review={review} key={index} />)}
        </div>
        {
          display.length < total.length && (<button id='more-reviews-button' onClick={handleMoreReviews}>MORE REVIEWS</button>)
        }
        <div id='addreview'>
          <AddReview productName={productName} productId={productId} />
        </div>
      </div>


    </div>

  );
};
export default ReviewsList;