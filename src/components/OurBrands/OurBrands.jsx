import './OurBrands.css';

import brands1 from '../../../public/brand/brand1.png'
import brands2 from '../../../public/brand/brand2.png'
import brands3 from '../../../public/brand/brand3.png'
import brands4 from '../../../public/brand/brand4.png'
import brands5 from '../../../public/brand/brand5.png'
import brands6 from '../../../public/brand/brand6.png'
import brands7 from '../../../public/brand/brand7.png'
import brands8 from '../../../public/brand/brand8.png'
import brands9 from '../../../public/brand/brand9.png'
import brands10 from '../../../public/brand/brand10.png'


const OurBrands = () => {
  return (
    <div className='my-10'>
      {/* ourBrands section start */}
      <div className='container mx-auto'>
        {/* title section start */}
        <div className='text-center'>
          <h1 className='text-2xl md:text-5xl'><i>Our Brands</i></h1>
          <p className='text-xs md:text-lg my-1'>This is our Brands. There are many brands in here and there.<br></br>If you need any brands information contact us.</p>
        </div>
        {/* title section end */}
        {/* brand section start */}
        <div className='grid md:grid-cols-10 grid-cols-2 md:gap-3 gap-2 md:mt-3 mt-2'>
          {/* brands1 start */}
          <div>
            <img src={brands1}></img>
          </div>
          {/* brands1 end */}
          {/* brands2 start */}
          <div>
            <img src={brands2}></img>
          </div>
          {/* brands2 end */}
          {/* brands3 start */}
          <div>
            <img src={brands3}></img>
          </div>
          {/* brands3 end */}
          {/* brands4 start */}
          <div>
            <img src={brands4}></img>
          </div>
          {/* brands4 end */}
          {/* brands5 start */}
          <div>
            <img src={brands5}></img>
          </div>
          {/* brands5 end */}
          {/* brands6 start */}
          <div>
            <img src={brands10}></img>
          </div>
          {/* brands6 end */}
          {/* brands7 start */}
          <div>
            <img src={brands7}></img>
          </div>
          {/* brands7 end */}
          {/* brands8 start */}
          <div>
            <img src={brands8}></img>
          </div>
          {/* brands8 end */}
          {/* brands9 start */}
          <div>
            <img src={brands9}></img>
          </div>
          {/* brands9 end */}
          {/* brands10 start */}
          <div>
            <img src={brands6}></img>
          </div>
          {/* brands10 end */}
        </div>
        {/* brand section end */}
      </div>
      {/* ourBrands section end */}
    </div>
  );
};

export default OurBrands;