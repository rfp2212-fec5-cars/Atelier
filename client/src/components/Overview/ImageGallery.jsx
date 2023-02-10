import React, {useState, useEffect} from 'react';
import DefaultView from './Subcomponents/ImageGallery/DefaultView.jsx';
import ExpandedView from './Subcomponents/ImageGallery/ExpandedView.jsx';


const ImageGallery = ({ currentStyle }) => {

  const [currentImages, setCurrentImages] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (currentStyle) {
      setCurrentImages(currentStyle.photos);
    }
  }, [currentStyle]);

  if (currentImages.length !== 0) {
    const thumbnailURLs = currentImages.map((image) => image.thumbnail_url);
    const imageURLs = currentImages.map((image) => image.url);

    return (
      <>
        {expanded ?
          <ExpandedView
            thumbnailURLs={thumbnailURLs}
            imageURLs={imageURLs}
            setExpanded={setExpanded}
            expanded={expanded}/> :
          <DefaultView
            thumbnailURLs={thumbnailURLs}
            imageURLs={imageURLs}
            expanded={expanded}
            setExpanded={setExpanded}/>}
      </>
    );
  }
};

export default ImageGallery;