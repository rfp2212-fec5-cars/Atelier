import React, {useState, useEffect} from 'react';
import DefaultView from './Subcomponents/ImageGallery/DefaultView.jsx';
import ExpandedView from './Subcomponents/ImageGallery/ExpandedView.jsx';


const ImageGallery = ({currentStyle}) => {

  const [currentImages, setCurrentImages] = useState([]);

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
        <DefaultView
          thumbnailURLs={thumbnailURLs}
          imageURLs={imageURLs}
        />
      </>
    );
  }
};

export default ImageGallery;