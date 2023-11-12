import { useEffect } from 'react';
import './OurGallery.css'
import { useState } from 'react';
import Gallery from '../Gallery/Gallery';

const OurGallery = () => {
  
  const [gallery, setGallery] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/gallery')
    .then(res => res.json())
    .then(data => setGallery(data))
  },[])


  return (
    <div className='my-10'>
      {/* outGallery section start */}
      <div className='container mx-auto'>
        {/* title section start */}
        <div>
          <h1 className='text-2xl md:text-5xl'><i>Our Gallery</i></h1>
          <p className='text-xs md:text-lg my-1'>This is our Gallery. There are many Items in here.<br></br>If you need any items please contact us in your email.</p>
        </div>
        {/* title section end */}
        {/* gallery section start */}
        <div className='grid md:grid-cols-5 grid-cols-2 md:gap-3 gap-2 md:mt-3 mt-2'>
          {
            gallery.map(gallery => <Gallery
            key={gallery._id}
            gallery={gallery}
            ></Gallery>)
          }
        </div>
        {/* gallery section end */}
      </div>
      {/* outGallery section end */}
    </div>
  );
};

export default OurGallery;