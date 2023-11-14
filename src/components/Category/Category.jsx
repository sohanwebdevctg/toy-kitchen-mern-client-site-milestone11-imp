import { Link } from 'react-router-dom';
import './Category.css';

// eslint-disable-next-line react/prop-types
const Category = ({category}) => {
  
  // eslint-disable-next-line react/prop-types
  const {_id, image, toyName, toyPrice, rating } = category;
  return (
    <div className='bg-slate-100 p-3'>
      {/* category section start */}
      <img className='md:w-96 md:h-72 w-full h-52' src={image}></img>
      {/* category section end */}
      {/* item section start */}
      <div className='pt-4'>
        <h1 className='md:text-xl font-bold'><i>{toyName}</i></h1>
        <div className='flex justify-between mt-2'>
          <p className='md:text-xl'><span className='font-bold'>Price:</span>${toyPrice}</p>
          <p className='md:text-xl'><span className='font-bold'>Rating:</span>{rating}</p>
        </div>
        <Link to={`/shopCategoryDetails/${_id}`} className='flex justify-end mt-3'>
          <button className='block bg-black md:p-2 p-1 rounded text-slate-300 text-sm md:text-base'>Show Details</button>
        </Link>
      </div>
      {/* item section end */}
    </div>
  );
};

export default Category;