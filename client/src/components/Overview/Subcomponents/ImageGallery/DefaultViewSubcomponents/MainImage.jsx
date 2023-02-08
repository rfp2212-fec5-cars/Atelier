import React, {useState, useEffect} from 'react';

const MainImage = ({imageURLs, imageNumber}) => {
  return (
    <>
      {imageURLs.map((url, index) => (
        index === imageNumber &&
        <div data-testid='main-image' key = {url}>
          <img
            className = 'main-image'
            id='default-view'
            src = {url}
          />
        </div>
      ))}
    </>
  );
};

export default MainImage;