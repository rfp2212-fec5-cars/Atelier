import React, {useState, useEffect} from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ThumbnailList = ({thumbnailURLs, imageNumber, setImageNumber}) => {

  const [thumbnailContainerIndex, setThumbnailContainerIndex] = useState([0, 6]);
  // const [isSelected, setIsSelected] = useState(false);

  if (thumbnailURLs) {
    const imagesLength = thumbnailURLs.length;
    // console.log('number of photos', imagesLength);

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
      <div style={{display: 'inline-block', position: 'absolute'}}>
        <div className= 'thumbnail-overlay'>
          {imageNumber === 0 ? null :
            <> {<AiOutlineArrowLeft onClick={loadPreviousImage} style={{width: '50px', color: 'white'}} />}</>
          }
          {/* <div className='thumbnail-list'> */}
          {thumbnailURLs.map((url, index) => (
            <div className = {index === imageNumber ? 'selected-thumbnail' : 'thumbnail'} key = {`thumbnail${index}`} style ={{ display: 'inline' }}>
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
          {/* </div> */}
          {imageNumber === imagesLength - 1 ? null :
            <> {<AiOutlineArrowRight onClick={loadNextImage} style={{width: '50px', color: 'white'}} />}</>}
        </div>
      </div>
    );
  }
};


export default ThumbnailList;