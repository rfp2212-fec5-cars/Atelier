import React, {useState, useEffect} from 'react';
import MainImage from './DefaultViewSubcomponents/MainImage.jsx';
import ThumbnailList from './DefaultViewSubcomponents/ThumbnailList.jsx';

const DefaultView = ({imageURLs, thumbnailURLs, setExpanded}) => {

  const [imageNumber, setImageNumber] = useState(0);

  useEffect(()=>{
    setImageNumber(0);
  }, []);

  return (
    <div id='default-view-container'>
      <div>
        <MainImage
          imageURLs={imageURLs}
          imageNumber={imageNumber}
          setExpanded={setExpanded}/>
      </div>
      <ThumbnailList
        thumbnailURLs={thumbnailURLs}
        imageNumber={imageNumber}
        setImageNumber={setImageNumber}
      />
    </div>
  );
};


export default DefaultView;