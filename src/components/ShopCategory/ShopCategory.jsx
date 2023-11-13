import { useEffect } from 'react';
import './ShopCategory.css';

const ShopCategory = () => {


  useEffect(() => {
    fetch('http://localhost:5000/shopByCategory')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default ShopCategory;

  // http://localhost:5000/shopByCategory