import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Overview from './Overview/Overview.jsx';
import RR from './RatingsReviews/RR.jsx';
import QA from './QA/QA.jsx';


const App = () => {

  //STATES//

  const [productId, setProductId] = useState(40346);
  const [product, setProduct] = useState({});
  const [avgStar, setAvgStar] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    var options = {
      url: `/products/${productId}`
    };

    axios(options)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log('Failed to get product', err);
      });
  }, []);

  const handleRate = (rate)=>{
    setAvgStar(rate);
  };
  const handleTotal = (sum)=>{
    setTotal(sum);
  };

  const logInteraction = ({ element, widget }) => {
    var time = new Date().getTime().toString();

    var options = {
      url: '/interactions',
      method: 'POST',
      data: { element, widget, time }
    };
    console.log('options', options);

    axios(options)
      .then(() => {
        console.log('User clicked on', element, 'in', widget);
      })
      .catch((err) => console.log('Failed posting user interaction', err));
  };

  return (
    <div>
      <div className='main-header'>
        <h1>Atelier</h1>
      </div>
      <div id='app'>
        <Overview productId={productId} avgStar={ avgStar } total={ total } logInteraction={logInteraction}/>
        <RR productId={productId} productName = {product.name} handleRate={handleRate} handleTotal={handleTotal} logInteraction={logInteraction}/>
        <QA className='QA' product_id={ productId } product_name={ product.name } logInteraction={ logInteraction }/>
      </div>
    </div>
  );
};

export default App;