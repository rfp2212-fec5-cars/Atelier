import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import AddReview from './AddReview.jsx';

var ReviewsList = ({ display, setDisplay, total, handleSort, reRenderList }) => {
  let num = display.length;
  const handleMoreReviews = () => {
    num += 2;
    setDisplay(total.slice(0, num));
  };
  return (
    <div>
      <div id='reviewslist'>
        <div>{total.length} reviews, sorted by
          <select id='mySelect' onChange={(e) => {
            handleSort(e);
          }}>
            <option value='Relevant'>Relevant</option>
            <option value='Helpful'>Helpful</option>
            <option value='Newest'>Newest</option>
          </select>
        </div>
        <div id='reviewcontent'>
          {display.map((review, index) =>
            <ReviewListEntry review={review} key={index} reRenderList={reRenderList} />)}
        </div>
        {
          display.length < total.length && (<button onClick={handleMoreReviews}>MORE REVIEWS</button>)
        }
      </div>
      <div id = 'addreview'>
        <AddReview />
      </div>

    </div>

  );
};
export default ReviewsList;