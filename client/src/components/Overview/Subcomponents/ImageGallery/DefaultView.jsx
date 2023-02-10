import React, {useState, useEffect} from 'react';
import MainImage from './DefaultViewSubcomponents/MainImage.jsx';
import ThumbnailList from './DefaultViewSubcomponents/ThumbnailList.jsx';

const DefaultView = ({imageURLs, thumbnailURLs, setExpanded, logInteraction}) => {

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
          setExpanded={setExpanded}
          logInteraction={logInteraction}/>
      </div>
      <ThumbnailList
        thumbnailURLs={thumbnailURLs}
        imageNumber={imageNumber}
        setImageNumber={setImageNumber}
        logInteraction={logInteraction}
      />
    </div>
  );
};


export default DefaultView;