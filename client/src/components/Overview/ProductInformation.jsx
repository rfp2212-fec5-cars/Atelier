import React, {useState, useEffect} from 'react';

const ProductInformation = () => {

  const scrollToReviews = () => {
    document.getElementsByClassName('reviews').scrollIntoView();
  };


  return (
    <div>
      <p>I'm Product Information</p>
    </div>
  );
};

export default ProductInformation;