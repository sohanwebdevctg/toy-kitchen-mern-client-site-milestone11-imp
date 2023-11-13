import './AboutOurStore.css';

const AboutOurStore = () => {
  return (
    <div className='aboutStoreCon my-10'>
      {/* AboutOurStore section start */}
      <div className='container mx-auto'>
        <div className='flex justify-center items-center md:h-72 h-40'>
          {/* description section start */}
          <div className='text-center aboutStoreSec'>
            <h1 className='md:text-4xl font-bold text-xl text-white'>ABOUT</h1>
            <h2 className='md:text-4xl my-1 text-2xl'>OURSTORE!</h2>
            <p className='md:text-base text-xs text-gray-300'><i>This is our toy store. you can buy any type of toy and any type of toy collection.If you need any <br></br>collection please contact us.If you have any objection please contact us.</i></p>
          </div>
          {/* description section end */}
        </div>
      </div>
      {/* AboutOurStore section end */}
    </div>
  );
};

export default AboutOurStore;