import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
      <div>
        {styles.map((style) => {
          console.log(style.photos[0].thumbnail_url, 'STYLE Photos FROM MAP');
          return (
            <a>
              <img src= {`${style.photos[0].thumbnail_url}`} alt='default style thumbnail'></img>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default StyleSelector;