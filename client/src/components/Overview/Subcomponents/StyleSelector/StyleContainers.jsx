import React, {useState, useEffect} from 'react';

const StyleContainers = ({styles, setCurrentStyle, currentStyle}) => {

  const handleStyleChange = (style) => {
    console.log(currentStyle, style);
    if (currentStyle !== style) {
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
    <div>
      <ul>
        {styleContainer1.length ? styleContainer1.map((style, index) => {
          // console.log(style, 'STYLE Photos FROM MAP');
          return (
            <li onClick ={()=> { handleStyleChange(style); }} key = {index} style ={{ display: 'inline' }}>
              <a>
                <img key = {index} src= {`${style.photos[0].thumbnail_url}`} alt='default style thumbnail'></img>
              </a>
            </li>
          );
        }) : null}
      </ul>
      <ul>
        {styleContainer2.length ? styleContainer2.map((style, index) => {
          // console.log(style, 'STYLE Photos FROM MAP');
          return (
            <li onClick ={()=> { handleStyleChange(style); }} key = {index} style ={{ display: 'inline' }}>
              <a>
                <img key = {index} src= {`${style.photos[0].thumbnail_url}`} alt='default style thumbnail'></img>
              </a>
            </li>
          );
        }) : null}
      </ul>
      <ul>
        {styleContainer3.length ? styleContainer3.map((style, index) => {
          // console.log(style, 'STYLE Photos FROM MAP');
          return (
            <li onClick ={()=> { handleStyleChange(style); }} key = {index} style ={{ display: 'inline' }}>
              <a>
                <img key = {index} src= {`${style.photos[0].thumbnail_url}`} alt='default style thumbnail'></img>
              </a>
            </li>
          );
        }) : null}
      </ul>
    </div>
  );
};

export default StyleContainers;