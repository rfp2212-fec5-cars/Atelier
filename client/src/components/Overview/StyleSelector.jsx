import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StyleContainers from './Subcomponents/StyleSelector/StyleContainers.jsx';

const StyleSelector = ({productId, productStyles, setCurrentStyle, currentStyle, setSelectedSku}) => {

  const [styles, setStyles] = useState([]);

  const getStyles = () =>{
    let url = `/products/${productId}/styles`;
    axios(url)
      .then((results) => {
        setStyles(results.data.results);
        setCurrentStyle(results.data.results[0]);
      });
  };

  useEffect(()=>{
    getStyles();
  }, []);


  return (
    <div className = 'styleSelector'>
      <div><b>STYLE</b></div>
      <h2>{currentStyle ? currentStyle.name : null}</h2>
      <div>
        {currentStyle ? <StyleContainers
          styles={styles}
          setCurrentStyle={setCurrentStyle}
          currentStyle={currentStyle}
          setSelectedSku={setSelectedSku}/> : null}
      </div>
    </div>
  );
};
export default StyleSelector;