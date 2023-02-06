import React, {useState, useEffect} from 'react';
import DefaultView from './Subcomponents/ImageGallery/DefaultView.jsx';
import ExpandedView from './Subcomponents/ImageGallery/ExpandedView.jsx';


const ImageGallery = ({currentStyle}) => {

  console.log(currentStyle);

  const [currentImages, setCurrentImages] = useState([]);
  const [expanded, setExpanded] = useState(false);


  useEffect(() => {
    if (currentStyle) {
      setCurrentImages(currentStyle.photos);
    }
  }, [currentStyle]);

  // useEffect(() => {
  //   console.log(currentImages);
  // }, [currentImages]);


  if (currentImages.length !== 0) {
    const thumbnailURLs = currentImages.map((image) => image.thumbnail_url);
    console.log('currentimages', currentImages)
    const imageURLs = currentImages.map((image) => image.url);


    return (
      <div className = 'image-gallery'>
        <div><b>IMAGE GALLERY</b></div>
        {expanded ?
          <ExpandedView/> :
          <DefaultView
            thumbnailURLs={thumbnailURLs}
            imageURLs={imageURLs}/>}
      </div>
    );
  }



};

export default ImageGallery;