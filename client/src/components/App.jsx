import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Overview from './Overview/Overview.jsx';
import RR from './RatingsReviews/RR.jsx';


const App = () => {
  //STATES//
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(40344);

  //Handler//
  const allProducts = async () => {
    // axios
    //   .get('/products')
    //   .then(({data}) => setProducts(data))
    //   .catch(err => console.log('App.jsx', err));
    // var result = await axios.get('/products');
    try {
      var result = await axios.get('/products');
      console.log(result)
    }catch(err){console.log(err)}

  };

  useEffect(() => {
    allProducts();
  }, []);
  return (
    <div>
      <h1>Hello world</h1>
      <Overview/>
      <RR productId={productId}/>
    </div>
  );
};

export default App;