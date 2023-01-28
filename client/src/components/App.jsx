import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Overview from './Overview/Overview.jsx';
import RR from './RatingsReviews/RR.jsx';
import QA from './QA/QA.jsx';
import RelatedItemsComparison from './Related Items & Comparison/Related Items & Comparison.jsx';


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
      <Overview/>
      <RR productId={productId}/>
      <QA />
      {/* <RelatedItemsComparison/> */}
    </div>
  );
};

export default App;