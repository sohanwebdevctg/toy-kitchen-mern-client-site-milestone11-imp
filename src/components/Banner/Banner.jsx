import './Banner.css';

import kitchen1 from '../../../public/kitchen/kitchen1.webp';
import kitchen2 from '../../../public/kitchen/kitchen2.webp';
import kitchen3 from '../../../public/kitchen/kitchen3.webp';
import kitchen4 from '../../../public/kitchen/kitchen4.jfif';
import side1 from '../../../public/bannerImage/sideKitchen1.webp';
import side2 from '../../../public/bannerImage/sideKitchen2.webp';

const Banner = () => {
  return (
    <div className='my-10'>
      {/* banner items start */}
      <div className='md:container md:mx-auto'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
          {/* banner left site start */}
          <div className=''>
            <div className="carousel w-full md:h-[500px] h-[400px]">
              <div id="slide1" className="carousel-item relative w-full">
                <img src={kitchen1} className='w-full md:px-20'></img>
                {/* position data start */}
                <div className='absolute md:top-80 top-60 md:left-28 left-3 text-center md:w-96 w-72 bg-black h-36 bg-opacity-60 flex items-center justify-center'>
                  <div>
                    <h1 className='text-white md:font-bold'>Full Kitchen</h1>
                    <p className='text-white md:text-lg'>This is Full Kitchen</p>
                    <button className='bg-red-500 px-3 py-2 rounded'>Show</button>
                  </div>
                </div>
                {/* position data end */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">❮</a> 
                  <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide2" className="carousel-item relative w-full">
                <img src={kitchen2} className='w-full md:px-20'></img>
                {/* position data start */}
                <div className='absolute md:top-80 top-60 md:left-28 left-3 text-center md:w-96 w-72 bg-black h-36 bg-opacity-60 flex items-center justify-center'>
                  <div>
                      <h1 className='text-white md:font-bold'>Portable Kitchen</h1>
                      <p className='text-white md:text-lg'>This is Tour Kitchen</p>
                      <button className='bg-red-500 px-3 py-2 rounded'>Show</button>
                    </div>
                </div>
                {/* position data end */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a> 
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide3" className="carousel-item relative w-full">
                <img src={kitchen3} className='w-full md:px-20'></img>
                {/* position data start */}
                <div className='absolute md:top-80 top-60 md:left-28 left-3 text-center md:w-96 w-72 bg-black h-36 bg-opacity-60 flex items-center justify-center'>
                  <div>
                      <h1 className='text-white md:font-bold'>Shop Kitchen</h1>
                      <p className='text-white md:text-lg'>This is Shop Kitchen</p>
                      <button className='bg-red-500 px-3 py-2 rounded'>Show</button>
                    </div>
                </div>
                {/* position data end */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a> 
                  <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide4" className="carousel-item relative w-full">
                <img src={kitchen4} className='w-full md:px-20'></img>
                {/* position data start */}
                <div className='absolute md:top-80 top-60 md:left-28 left-3 text-center md:w-96 w-72 bg-black h-36 bg-opacity-60 flex items-center justify-center'>
                  <div>
                      <h1 className='text-white md:font-bold'>Kids Kitchen</h1>
                      <p className='text-white md:text-lg'>This is Kids Kitchen</p>
                      <button className='bg-red-500 px-3 py-2 rounded'>Show</button>
                    </div>
                </div>
                {/* position data end */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a> 
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div>
            </div>
          </div>
          {/* banner left site end */}
          {/* banner right site start */}
          <div className='w-full md:h-[500px] overflow-hidden'>
            <div className='md:h-[250px] flex justify-center mb-2 md:mb-0'>
              <img src={side1} className='h-60 w-full'></img>
            </div>
            <div className='md:h-[250px] flex justify-center'>
              <img src={side2} className='h-60 w-full'></img>
            </div>
          </div>
          {/* banner right site end */}
        </div>
      </div>
      {/* banner items end */}
    </div>
  );
};

export default Banner;