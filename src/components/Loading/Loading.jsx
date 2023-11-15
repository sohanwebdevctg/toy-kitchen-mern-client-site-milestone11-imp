import './Loading.css';

const Loading = () => {
  return (
    <div className='bg-black w-full h-screen flex items-center justify-center'>
      <div className='md:container md:mx-auto'>
        <div className='md:h-screen flex justify-center items-center text-center'>
          {/* loading section start */}
          <div className='flex'>
            <p className='text-white text-6xl'>L</p>
            <div className='border-4 p-7 border-dotted rounded-full animate-spin'></div>
            <p className='text-white text-6xl'>ading....</p>
          </div>
          {/* loading section end */}
        </div>
      </div>
    </div>






    //       <p className='text-white text-6xl'>ading....</p>




  

  );
};

export default Loading;