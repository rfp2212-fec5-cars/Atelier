import React, {useState, useEffect} from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ThumbnailList = ({thumbnailURLs, imageNumber, setImageNumber, logInteraction}) => {

  const [thumbnailContainerIndex, setThumbnailContainerIndex] = useState([0, 6]);

  if (thumbnailURLs) {
    const imagesLength = thumbnailURLs.length;

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

    const changeMainImage = (index) => {
      if (imageNumber !== index) {
        setImageNumber(index);
      }
    };

    useEffect(()=> {
      console.log('container', thumbnailContainerIndex);
      console.log('imageNumber', imageNumber);
    }, [thumbnailContainerIndex, imageNumber]);

    const loadPreviousImage = () => {
      console.log(thumbnailContainerIndex[0]);
      if (thumbnailContainerIndex[0] !== 0) {
        setThumbnailContainerIndex([thumbnailContainerIndex[0] - 1, thumbnailContainerIndex[1] - 1]);
        setImageNumber(imageNumber - 1);
        logInteraction({
          element: 'thumbnail-list',
          widget: 'Overview'});
      } else if (imageNumber > 0) {
        setImageNumber(imageNumber - 1);
        logInteraction({
          element: 'thumbnail-list',
          widget: 'Overview'});
      }
    };

    const loadNextImage = () => {
      if (thumbnailContainerIndex[1] !== imagesLength - 1) {
        setThumbnailContainerIndex([thumbnailContainerIndex[0] + 1, thumbnailContainerIndex[1] + 1]);
        setImageNumber(imageNumber + 1);
        logInteraction({
          element: 'thumbnail-list',
          widget: 'Overview'});
      } else if (imageNumber < imagesLength - 1) {
        setImageNumber(imageNumber + 1);
        logInteraction({
          element: 'thumbnail-list',
          widget: 'Overview'});
      }
    };

    return (
      <div data-testid='tnt' className= 'thumbnail-list'>
        {imageNumber === 0 ? <div style={{visability: 'hidden'}}></div> :
          <> {<AiOutlineArrowLeft onClick={loadPreviousImage} className='thumbnail-arrow' />}</>
        }
        <div >
          {thumbnailURLs.map((url, index) => (
            <div className = {index === imageNumber ? 'selected-thumbnail' : 'thumbnail'} key = {`thumbnail${index}`} style ={{ display: 'inline' }}>
              {index <= thumbnailContainerIndex[1] && index >= thumbnailContainerIndex[0] ?
                <span>
                  <img
                    onClick = {() => {
                      changeMainImage(index);
                      logInteraction({
                        element: 'thumbnail-list',
                        widget: 'Overview'});
                    }}
                    className = 'thumbnail-image'
                    id='default-view'
                    src = {url}
                  />
                </span>
                :
                null}
            </div>
          ))}
        </div>
        {imageNumber === imagesLength - 1 ? <div style={{visability: 'hidden'}}></div> :
          <> {<AiOutlineArrowRight onClick={loadNextImage} className='thumbnail-arrow' />}</>}
      </div>
    );
  }
};


export default ThumbnailList;