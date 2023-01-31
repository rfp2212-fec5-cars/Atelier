import React, {useState, useEffect} from 'react';

const SocialMediaButton = (platform) => {

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <button onClick = {handleClick}>Empty Button For Now</button>
      </form>
    </div>
  );
};

export default SocialMediaButton;