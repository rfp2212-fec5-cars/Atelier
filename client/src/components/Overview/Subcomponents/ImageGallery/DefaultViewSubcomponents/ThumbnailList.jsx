import React, {useState, useEffect} from 'react';

const ThumbnailList = ({thumbnailURLs, imageNumber, setImageNumber}) => {

  const [thumbnailContainerIndex, setThumbnailContainerIndex] = useState([0, 6]);

  if (thumbnailURLs) {
    const imagesLength = thumbnailURLs.length;
    console.log('number of photos', imagesLength);

    useEffect(() => {
      if (thumbnailURLs.length - 1 <= 6) {
        setThumbnailContainerIndex([0, imagesLength - 1]);
      } else {
        if (imageNumber + 6 >= imagesLength - 1) {
          setThumbnailContainerIndex([imagesLength - 7, imagesLength - 1]);
        } else {
          setThumbnailContainerIndex([imageNumber, imageNumber + 6]);
        }
      }
    }, [imageNumber]);

    useEffect(()=> {
      console.log('thumbnail State', thumbnailContainerIndex);
    }, thumbnailContainerIndex);

    const changeMainImage = (index) => {
      if (imageNumber !== index) {
        setImageNumber(index);
      }
    };

    const loadPreviousImage = () => {
      if (thumbnailContainerIndex[0] !== 0) {
        setThumbnailContainerIndex([thumbnailContainerIndex[0] - 1, thumbnailContainerIndex[1] - 1]);
        setImageNumber(imageNumber - 1);
      }
    };

    const loadNextImage = () => {
      if (thumbnailContainerIndex[1] !== imagesLength - 1) {
        setThumbnailContainerIndex([thumbnailContainerIndex[0] + 1, thumbnailContainerIndex[1] + 1]);
        setImageNumber(imageNumber + 1);
      } else if (imageNumber < imagesLength - 1) {
        setImageNumber(imageNumber + 1);
      }
    };

    return (
      <div id= 'thumbnail-list'>
        {console.log(imageNumber, thumbnailContainerIndex)}
        <div className= 'thumbnail-overlay'>
          {imageNumber === 0 ? null :
            <button className='left-arrow' onClick={loadPreviousImage}> Insert Left Arrow Image Here</button>}
          {thumbnailURLs.map((url, index) => (
            <div className = 'thumbnail' key = {`thumbnail${index}`} style ={{ display: 'inline' }}>
              {index <= thumbnailContainerIndex[1] && index >= thumbnailContainerIndex[0] ?
                <span>
                  <img
                    onClick = {() => { changeMainImage(index); }}
                    className = 'thumbnail-image'
                    id='default-view'
                    src = {url}
                    style = {{height: '50px'}}
                  />
                </span>
                :
                null}
            </div>
          ))}
          {imageNumber === imagesLength - 1 ? null :
            <button className='right-arrow' onClick={loadNextImage}> Insert Right Arrow Image Here</button>}
        </div>
      </div>
    );
  }
};


export default ThumbnailList;