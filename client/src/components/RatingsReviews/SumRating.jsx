import React, {useState, useEffect} from 'react';
import Star1 from './Star1.jsx';
import Sortstar from './Sortstar.jsx';
import ProductCharacteristic from './ProductCharacteristic.jsx';
import SelectedStar from './SelectedStar.jsx';

var SumRating = ({ meta, handleUserClick, sortStar, handleSortStar, handleRate, logInteraction}) => {
  //console.log('sortStar', sortStar);
  if (Object.keys(meta).length === 0) {
    return (
      <div>
      </div>
    );
  } else {
    //console.log('meta after ', meta);
    let sum1 = 0;
    var sum2 = 0;
    let i = 1;

    for (let value of Object.values(meta.ratings)) {
      sum1 += i * value;
      sum2 += parseInt(value);
      i++;
    }
    let num = (sum1 / sum2).toFixed(1);

    //count the rate to display rating star
    let rate = (num / 5).toFixed(2);
    useEffect(()=>handleRate(rate), []);


    let recommend = meta.recommended.true;
    let sumReviews = parseInt(meta.recommended.true) + parseInt(meta.recommended.false);
    let rateRecommend = (recommend / sumReviews).toFixed(2) * 100;

    let rateStar = [];
    rateStar.push(-1);
    let sumStars = 0;
    Object.values(meta.ratings).forEach((v) => {
      sumStars += parseInt(v);
    });
    Object.keys(meta.ratings).forEach((key) => {
      rateStar.push((meta.ratings[key] * 100 / sumStars).toFixed(2));
    });
    //console.log('rateStar', rateStar);


    return (
      <div id='ratingbreakdown'>
        <span id='avgstar'>{num}</span>
        <Star1 rate={rate} />
        <div id='recommendrate'>{rateRecommend} % of reviews recommend this product</div>
        {
          sortStar.map((stars, index) =>
            <SelectedStar stars={stars} key={index} handleSortStar={handleSortStar} logInteraction={logInteraction}/>
          )
        }
        {Object.keys(meta.ratings).reverse().map(
          (k, index) => <Sortstar k={k} key={index} rateStar={rateStar} handleUserClick={handleUserClick} logInteraction={logInteraction}/>)}
        {Object.keys(meta.characteristics).map(
          (type, index) => <ProductCharacteristic type={type} info={meta.characteristics[type]} key={index} />
        )}

      </div>
    );
  }
};
export default SumRating;