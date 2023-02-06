import React, {useState, useEffect} from 'react';
import MainImage from './DefaultViewSubcomponents/MainImage.jsx';
import ThumbnailList from './DefaultViewSubcomponents/ThumbnailList.jsx';

const DefaultView = ({imageURLs, thumbnailURLs}) => {
  // console.log(imageURLs);
  // console.log(thumbnailURLs);

  const [imageNumber, setImageNumber] = useState(0);

  // useEffect(()=>{
  //   setImageNumber(0);
  // }, []);

  return (
    <>
      <div>
        <MainImage
          imageURLs={imageURLs}
          imageNumber={imageNumber}/>
      </div>
      <div>
        <ThumbnailList
          thumbnailURLs={thumbnailURLs}
          imageNumber={imageNumber}
          setImageNumber={setImageNumber}/>
      </div>
    </>
  );
};


export default DefaultView;