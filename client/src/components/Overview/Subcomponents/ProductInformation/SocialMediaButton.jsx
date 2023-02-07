import React, {useState, useEffect} from 'react';
import {AiFillFacebook} from 'react-icons/ai';
import {BsPinterest} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';

const SocialMediaButton = () => {

  // const handleClick = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div data-testid= 'social'>
      <form>
        <div style={{color: '#4267B2'}} className = 'icon'><AiFillFacebook size='2em'/></div>
        <div style={{color: '#E60023'}} className = 'icon'><BsPinterest size='2em'/></div>
        <div style={{color: '#1DA1F2'}} className = 'icon'><AiFillTwitterCircle size='2em'/></div>
      </form>
    </div>
  );
};

export default SocialMediaButton;