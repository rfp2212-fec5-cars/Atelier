import React, {useState, useEffect} from 'react';
import {AiFillFacebook} from 'react-icons/ai';
import {BsPinterest} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';

const SocialMediaButton = (platform) => {

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <div className = 'icon'><AiFillFacebook size='2em'/></div>
        <div className = 'icon'><BsPinterest size='2em'/></div>
        <div className = 'icon'><AiFillTwitterCircle size='2em'/></div>
      </form>
    </div>
  );
};

export default SocialMediaButton;