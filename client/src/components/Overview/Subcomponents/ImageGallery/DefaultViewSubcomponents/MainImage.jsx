import React, {useState, useEffect} from 'react';

const MainImage = ({imageURLs, imageNumber}) => {
  return (
    <div id='main-image'>
      {imageURLs.map((url, index) => (
        <div key = {url}>
          {index === imageNumber &&
            <img
              className = 'main-image'
              id='default-view'
              src = {url}
            />
          }
        </div>
      ))}
    </div>

  );
};

export default MainImage;