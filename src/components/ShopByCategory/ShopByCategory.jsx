import ShopCategory from '../ShopCategory/ShopCategory';
import './ShopByCategory.css';

const ShopByCategory = () => {
  return (
    <div className='my-10'>
      {/* shopByCategory section start */}
      <div className='container mx-auto'>
        {/* title section start */}
        <div>
          <h1 className='text-2xl md:text-5xl'><i>ShopByCategory</i></h1>
          <p className='text-xs md:text-lg my-1'>This is our Shop. There are many Items in here.<br></br>If you need any items please contact us in our email.</p>
        </div>
        {/* title section end */}
        {/* shopCategory section start */}
        <ShopCategory></ShopCategory>
        {/* shopCategory section end */}
      </div>
      {/* shopByCategory section end */}
    </div>
  );
};

export default ShopByCategory;

