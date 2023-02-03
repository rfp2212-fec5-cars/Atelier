import React from 'react';

//render each individual star with appropriate appearance
//\u2605 is ★'s js unicode,\u2606 is ☆'s js unicode
const Star = ({ marked, starId }) => {
  return (
    <span data-star-id={starId} className="setratingstar" role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
};

const StarRatingStar = ({ value, RatingScore }) => {
  const [rating, setRating] = React.useState(parseInt(value) || 0);//user click the star and get a rating
  const [selection, setSelection] = React.useState(0);//if hover on the 4th, selection is 4

  const map = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great'
  };

  const hoverOver = event => {
    let val = 0;
    if (event && event.target && event.target.getAttribute('data-star-id')) {
      val = event.target.getAttribute('data-star-id');
    }
    setSelection(val);
  };

  //pass rating to the upper component
  if (map[rating]) {
    RatingScore(rating);
  }

  return (
    <div className='overall-rating-star'
      onMouseOut={() => hoverOver(null)}
      onClick={(e) =>
        setRating(e.target.getAttribute('data-star-id') || rating)
      }
      onMouseOver={hoverOver}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
      <span>{map[rating]}</span>
    </div>
  );
};


export default StarRatingStar;