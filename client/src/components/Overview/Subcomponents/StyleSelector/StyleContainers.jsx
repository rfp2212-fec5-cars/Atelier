import React, {useState, useEffect} from 'react';
import {AiOutlineCheck} from 'react-icons/ai';

const StyleContainers = ({styles, setCurrentStyle, currentStyle, setSelectedSku}) => {

  const handleStyleChange = (style) => {
    if (currentStyle !== style) {
      setSelectedSku(null);
      setCurrentStyle(style);
    }
  };

  let styleContainer1 = [];
  let styleContainer2 = [];
  let styleContainer3 = [];

  styles.map((style, index) => {
    if (styleContainer1.length < 4) {
      styleContainer1.push(style);
    } else if ( styleContainer2.length < 4) {
      styleContainer2.push(style);
    } else if ( styleContainer3.length < 4) {
      styleContainer3.push(style);
    }
  });

  return (
    <div className = 'styleContainer'>
      <ul>
        {styleContainer1.length ? styleContainer1.map((style, index) => {
          return (
            <li onClick ={()=> { handleStyleChange(style); }} key = {index} style ={{ display: 'inline', position: 'relative'}}>
              <a>
                <img className = {style === currentStyle ? 'selected-style-thumbnail' : 'style-thumbnail'} src= {`${style.photos[0].thumbnail_url}`} alt='default style thumbnail'></img>
                {style === currentStyle ? <p style= {{position: 'absolute', top: '-80%', left: '60%'}} id='checkmark'><AiOutlineCheck size='2em' style={{color: 'red'}}/></p> : null}
              </a>
            </li>
          );
        }) : null}
      </ul>
      <ul>
        {styleContainer2.length ? styleContainer2.map((style, index) => {
          return (
            <li onClick ={()=> { handleStyleChange(style); }} key = {index} style ={{ display: 'inline', position: 'relative'}}>
              <a>
                <img className = {style === currentStyle ? 'selected-style-thumbnail' : 'style-thumbnail'} src= {`${style.photos[0].thumbnail_url}`} alt='default style thumbnail'></img>
              </a>
              {style === currentStyle ? <p style= {{position: 'absolute', top: '-80%', left: '60%'}} id='checkmark'><AiOutlineCheck size='2em' style={{color: 'red'}}/></p> : null}
            </li>
          );
        }) : null}
      </ul>
      <ul>
        {styleContainer3.length ? styleContainer3.map((style, index) => {
          return (
            <li onClick ={()=> { handleStyleChange(style); }} key = {index} style ={{ display: 'inline', position: 'relative'}}>
              <a>
                <img className = {style === currentStyle ? 'selected-style-thumbnail' : 'style-thumbnail'} src= {`${style.photos[0].thumbnail_url}`} alt='default style thumbnail'></img>
              </a>
              {style === currentStyle ? <p style= {{position: 'absolute', top: '-80%', left: '60%'}} id='checkmark'><AiOutlineCheck size='2em' style={{color: 'red'}}/></p> : null}
            </li>
          );
        }) : null}
      </ul>
    </div>
  );
};

export default StyleContainers;