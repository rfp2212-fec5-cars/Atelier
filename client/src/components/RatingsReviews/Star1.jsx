import React from 'react';

const Star1 = ({ rate }) => {

  return (
    <div className="star-rating">
      <div className="back-stars">
        <span >☆</span>
        <span >☆</span>
        <span >☆</span>
        <span >☆</span>
        <span >☆</span>

        <div className="front-stars" style={{ width: `${rate * 100 + '%'}` }}>
          <span >★</span>
          <span >★</span>
          <span >★</span>
          <span >★</span>
          <span >★</span>
        </div>
      </div>
    </div>
  );

};

export default Star1;