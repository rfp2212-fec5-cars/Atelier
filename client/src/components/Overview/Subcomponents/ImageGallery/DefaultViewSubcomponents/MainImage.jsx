import React, {useState, useEffect} from 'react';
import Modal from '../../../../Modal/Modal.jsx';
import ThumbnailList from './ThumbnailList.jsx';

const MainImage = ({imageURLs, imageNumber, logInteraction}) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const changeView = (e)=> {
    setIsExpanded(true);
    logInteraction({
      element: 'main-image',
      widget: 'Overview'});
  };

  const zoomIn = () => {
    const zoomImg = document.getElementById('zoom-expanded-view');
    zoomImg.addEventListener('mousemove', (e) => {
      let xPos = (e.pageX);
      let yPos = (e.pageY);
      zoomImg.style['transform-origin'] = `${xPos}px ${yPos}px`;
      zoomImg.style['transform'] = 'scale(1.25)';
    });
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
              onClick = {e => changeView(e) }
            />
            <Modal onClose={()=> { setIsExpanded(false); }} show = {isExpanded} key ={index}>
              <div>
                <img
                  className = 'main-image'
                  id={isZoomed ? 'zoom-expanded-view' : 'expanded-view'}
                  src = {url}
                  onClick = {()=>{
                    setIsZoomed(!isZoomed);
                    logInteraction({
                      element: 'main-image',
                      widget: 'Overview'});
                  }}
                  onMouseMove = {isZoomed ? (e)=> { zoomIn(e); } : null }
                />
              </div>
            </Modal>
          </div>
      ))}
    </>
  );
};

export default MainImage;