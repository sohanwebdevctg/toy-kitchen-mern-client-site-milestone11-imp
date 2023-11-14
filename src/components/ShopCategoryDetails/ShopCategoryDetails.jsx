import { useLoaderData, useNavigate } from 'react-router-dom';
import './ShopCategoryDetails.css';

const ShopCategoryDetails = () => {

  const data = useLoaderData();
  console.log(data)
  const {image, description, quantity, ratting, sellerEmail, sellerName, toyName, toyPrice} = data;

  const navigate = useNavigate();

  const backBtn = () => {
    navigate(-1)
  }


  return (
    <div>
      {/* details section start */}
      <div className='container mx-auto mt-10 mb-5 md:mb-0'>
      <h1 className='md:text-4xl text-xl font-bold mb-5 text-center'>Toy Name : {toyName}</h1>
        <div className=' md:flex justify-center items-center md:gap-5 bg-slate-100 md:p-5 p-2'>
              <div className='w-full'>
                <img className='w-full md:h-96' src={image}></img>
              </div>
              <div className='w-full'>
                <h2 className='md:text-2xl text-xl text-red-700 font-bold'>Toy Name : {toyName}</h2>
                <p className='md:text-xl text-sm mt-1'>Seller Name : {sellerName}</p>
                <p className='md:text-xl text-sm mt-1'>Seller Email : {sellerEmail}</p>
                <p className='md:text-xl text-sm mt-1'>Toy Price : {toyPrice}</p>
                <p className='md:text-xl text-sm mt-1'>Rating : {ratting}</p>
                <p className='md:text-xl text-sm mt-1'>Quantity : {quantity}</p>
                <span className='md:text-xl text-sm mt-1'>Description : {description}</span>
                <div onClick={backBtn} className='flex justify-end mt-3'>
                  <button className='block bg-black md:p-2 p-1 rounded text-slate-300 text-sm md:text-base'>ShopByCategory</button>
                </div>
              </div>
            </div>
      </div>
      {/* details section end */}
    </div>
  );
};

export default ShopCategoryDetails;