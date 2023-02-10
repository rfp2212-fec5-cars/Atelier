import React, {useState, useEffect} from 'react';
import Modal from '../../../../Modal/Modal.jsx';
import ThumbnailList from './ThumbnailList.jsx';


const MainImage = ({imageURLs, imageNumber, setExpanded, expanded}) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const changeView = ()=> {
    setIsExpanded(true);
    setExpanded(true);
  };

  const zoomIn = () => {
    const zoomImg = document.getElementById('zoom-expanded-view');
    zoomImg.addEventListener('mousemove', (e) => {
      let xPos = (e.pageX);
      let yPos = (e.pageY);
      console.log(xPos, yPos);
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
              onClick = {changeView}
            />
            <Modal onClose={()=> { setIsExpanded(false); setExpanded(false);}} show = {isExpanded} key ={index}>
              {console.log('im open!', url, isExpanded, imageNumber, index)}
              <div>
                <img
                  className = 'main-image'
                  id={isZoomed ? 'zoom-expanded-view' : 'expanded-view'}
                  src = {url}
                  onClick = {()=>{ setIsZoomed(!isZoomed); }}
                  onMouseMove = {isZoomed ? (e)=> { zoomIn(e); } : null }
                />
                {console.log(expanded)}
              </div>
            </Modal>
          </div>
      ))}
    </>
  );
};

export default MainImage;