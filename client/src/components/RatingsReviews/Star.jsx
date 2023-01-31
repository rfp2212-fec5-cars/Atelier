import React from 'react';

const Star = ({ star }) => {
  const fullStars = Math.floor(star);
  // Gets the number of full stars. starAverage is the rating, for example
  // if the rating were 4.3, fullStars would now be 4.

  const starArr = [];
  // Create an empty array. We will add 1s, 0s, and a decimal value for the
  // partial star.

  for (let i = 1; i <= fullStars; i++) {
    starArr.push(1);
  }
  // This adds a 1 to the array for each full star in our rating

  if (star < 5) {
    // Wrapped in an if block because the following only needs to occur if
    // it's not a full 5.

    const partialStar = star - fullStars;
    // Calculates the partial star. For example 4.3 - 4 = 0.3. 0.3 will get
    // added to the array in the next line to represent the partial star

    starArr.push(partialStar);
    // Adds the partial star to the array

    const emptyStars = 5 - starArr.length;
    // Calculates the number of empty stars

    for (let i = 1; i <= emptyStars; i++) {
      starArr.push(0);
    }
    // This for loop adds 0s to the array to represent empty stars
  }
  console.log(starArr);
  return (
    <span className='star'>
      {starArr.map((val, i) => (
        <span key={i}
          style={{
            background: `linear-gradient(90deg, #ff643d
        ${val * 100}%, #bbbac0 ${val * 100}%)`
          }}
        >★
        </span>
      ))
      }
    </span >
  );


};

export default Star;
