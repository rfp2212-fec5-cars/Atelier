import React, {useState, useEffect} from 'react';

const MainImage = ({imageURLs, imageNumber}) => {
  return (
    <>
      {imageURLs.map((url, index) => (
        <div data-testid='main-image' key = {url}>
          {index === imageNumber &&
            <img
              className = 'main-image'
              id='default-view'
              src = {url}
            />
          }
        </div>
      ))}
    </>
  );
};

export default MainImage;