import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Overview from './Overview/Overview.jsx';
import RR from './RatingsReviews/RR.jsx';
import QA from './QA/QA.jsx';
import RelatedItemsComparison from './Related Items & Comparison/Related Items & Comparison.jsx';


const App = () => {
  //STATES//
  // const [products, setProducts] = useState([]);

  //Handler//
  // const allProducts = async () => {
  //   // axios
  //   //   .get('/products')
  //   //   .then(({data}) => setProducts(data))
  //   //   .catch(err => console.log('App.jsx', err));
  //   // var result = await axios.get('/products');
  //   try {
  //     var result = await axios.get('/products')
  //     console.log(result)
  //   }catch(err){console.log(err)}

  // };

  // useEffect(() => {
  //   allProducts();
  // }, []);

  const [productId, setProductId] = useState(40390);
  const [product, setProduct] = useState({});

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

  return (
    <div>
      <Overview productId={productId}/>
      <RR productId={productId} productName = {product.name}/>
      <QA className='QA' product_id={ productId } product_name={ product.name }/>
      {/* <RelatedItemsComparison/> */}
    </div>
  );
};

export default App;