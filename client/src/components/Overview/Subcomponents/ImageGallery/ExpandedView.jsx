import React, {useState, useEffect} from 'react';
import Modal from '../../../Modal/Modal.jsx';


const ExpandedView = ({imageURLs, thumbnailURLs, expanded, setExpanded}) => {
  // console.log(imageURLs);
  // console.log(expanded);

  const [imageNumber, setImageNumber] = useState(0);
  useEffect(()=>{
    setImageNumber(0);
  }, []);

  return (
    <>
      {imageURLs.map((url, index) => (
        index === imageNumber &&
        <>
          <Modal onClose = {()=>setExpanded(false)} expanded={expanded}>
            <img
              key={url}
              className = 'expanded-image'
              id='expanded-view'
              src = {url}
            ></img>
          </Modal>
        </>

      ))}
    </>
  );
};


export default ExpandedView;