import React, { useState } from 'react';

var ReviewPhoto = ({ photo }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className = 'reviewphoto'>
      {
        expand === true && (
          <div onClick = {()=>setExpand(false)}>
            <img src={photo.url}></img>
          </div>)
      }
      <img className = 'thumbnails' src = {photo.url} onClick = {()=>setExpand(true)}></img>
    </div>
  );
};

export default ReviewPhoto;