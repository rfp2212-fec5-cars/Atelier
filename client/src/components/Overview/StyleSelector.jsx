import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StyleContainers from './Subcomponents/StyleSelector/StyleContainers.jsx';

const StyleSelector = ({productId, productStyles, setCurrentStyle}) => {

  const [styles, setStyles] = useState([]);

  const getStyles = () =>{
    let url = `/products/${productId}/styles`;
    axios(url)
      .then((results) => {
        setStyles(results.data.results);
        setCurrentStyle(results.data.results[0]);
        console.log('Styles Results', results.data.results);
      });
  };

  useEffect(()=>{
    getStyles();
  }, []);


  return (
    <div className = 'styleSelector'>
      <div><b>STYLE</b></div>
      <div className = 'thumbnail'>
        {/* {styles.map((style, index) => {
          console.log(style, 'STYLE Photos FROM MAP');
          return (
            <a key = {index} onClick ={handleStyleChange}>
              <img key = {index} src= {`${style.photos[0].thumbnail_url}`} alt='default style thumbnail'></img>
            </a>
          );
        })} */}
        <StyleContainers styles={styles} setCurrentStyle={setCurrentStyle}/>
      </div>
    </div>
  );
};
export default StyleSelector;