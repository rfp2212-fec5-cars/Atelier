import React, {useState, useEffect} from 'react';
import MainImage from './DefaultViewSubcomponents/MainImage.jsx';
import ThumbnailList from './DefaultViewSubcomponents/ThumbnailList.jsx';

const DefaultView = ({imageURLs, thumbnailURLs}) => {

  const [imageNumber, setImageNumber] = useState(0);

  useEffect(()=>{
    setImageNumber(0);
  }, []);

  return (
    <>
      <div id='default-view-container'>
        <div id='main-image'>
          <MainImage
            imageURLs={imageURLs}
            imageNumber={imageNumber}/>
        </div>
        <div id='thumbnail-list'>
          <ThumbnailList
            thumbnailURLs={thumbnailURLs}
            imageNumber={imageNumber}
            setImageNumber={setImageNumber}/>
        </div>
      </div>
    </>
  );
};


export default DefaultView;