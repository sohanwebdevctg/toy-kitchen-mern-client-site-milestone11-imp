import './Product.css';

// eslint-disable-next-line react/prop-types
const Product = ({product}) => {

  const {name, details, image} = product;

  return (
    <div>
      {/* product section start */}
      <div>
        <img src={image} className='w-full md:h-72'></img>
        <div className='pt-2'>
          <h1 className='md:text-3xl font-bold'>{name}</h1>
          <p className='md:text-xl text-base'><i>{details}</i></p>
        </div>
      </div>
      {/* product section end */}
    </div>
  );
};

export default Product;