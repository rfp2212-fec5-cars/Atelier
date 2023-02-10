import React, {useState, useEffect} from 'react';
import Modal from '../../../../Modal/Modal.jsx';

const MainImage = ({imageURLs, imageNumber, setExpanded}) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const changeView = ()=> {
    setIsExpanded(true);
  };

  const zoomIn = () => {
    console.log('something');
  };

  return (
    <>
      {imageURLs.map((url, index) => (
        index === imageNumber &&

          <div data-testid='main-image' key = {url}>
            <img
              className = 'main-image'
              id='default-view'
              src = {url}
              onClick = {changeView}
            />

            <Modal onClose={()=> setIsExpanded(false)} show = {isExpanded} key ={index}>
              {console.log('im open!', url, isExpanded, imageNumber, index)}
              <img
                className = 'main-image'
                id='expanded-view'
                src = {url}
                onClick = {zoomIn}
              />
            </Modal>

          </div>
      ))}
    </>
  );
};

export default MainImage;