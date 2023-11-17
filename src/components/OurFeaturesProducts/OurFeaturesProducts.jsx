import { useEffect, useState } from 'react';
import './OurFeaturesProducts.css';
import Product from '../Product/Product';

const OurFeaturesProducts = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://toy-kitchen-data-1c9lfyoda-sohanwebdevctgs-projects.vercel.app/featuresProducts')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  return (
    <div className='my-20'>
      {/* ourFeaturesProducts section start */}
      <div className='container mx-auto'>
        {/* title section start */}
        <div className='text-center'>
          <h1 className='text-2xl md:text-5xl'><i>Our Features Products</i></h1>
          <p className='text-xs md:text-lg my-1'>This is our Features Products. There are new items in here and there.<br></br>If you need any items please contact us.</p>
        </div>
        {/* title section end */}
        {/* products section start */}
        <div className='grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5 md:mt-3 mt-2'>
          {
            products.map(product => <Product
            key={product._id}
            product={product}
            ></Product>)
          }
        </div>
        {/* products section end */}
      </div>
      {/* ourFeaturesProducts section end */}
    </div>
  );
};

export default OurFeaturesProducts;
