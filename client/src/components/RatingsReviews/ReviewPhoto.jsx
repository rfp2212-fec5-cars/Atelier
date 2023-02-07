import React, { useState } from 'react';
import Modal from '../Modal/Modal.jsx';

var ReviewPhoto = ({ photo }) => {
  const [show, setShow] = useState(false);

  return (
    <div className = 'reviewphoto'>
      <img className = 'thumbnails' src = {photo.url} onClick = {()=>setShow(true)}></img>
      <Modal onClose = {()=>setShow(false)} show = {show}>
        <img src = {photo.url}></img>
      </Modal>
    </div>

  );
};

export default ReviewPhoto;