import './Gallery.css';

// eslint-disable-next-line react/prop-types
const Gallery = ({gallery}) => {

  // eslint-disable-next-line react/prop-types
  const {image, name, type} = gallery;
  return (
    <div className='border-black border relative'>
      {/* image section start */}
      <img src={image} className='w-full h-64 p-1'></img>
      {/* image section end */}
      {/* details section start */}
      <div className='bg-black absolute top-10 left-5 right-5 bottom-10 opacity-0 hover:opacity-75 transform duration-500 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='md:text-xl text-base text-white'>{type}</h1>
          <p  className='md:text-xl text-lg text-red-500'>{name}</p>
        </div>
      </div>
      {/* details section end */}
    </div>
  );
};

export default Gallery;