import { useNavigate, useRouteError } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {

  const error = useRouteError();

  const navigate = useNavigate()


  return (
    <div className=' h-screen flex items-center justify-center'>
      {/* error page start */}
      <div className='md:container md:mx-auto'>
        <div className='md:h-screen flex items-center justify-center text-center'>
          {/* description section start */}
          <div>
          <p className='md:text-5xl md:font-semibold'>Oops!</p>
          <p className=' md:text-3xl md:font-semibold md:my-3'>Sorry, an unexpected error has occurred.</p>
          <p className='text-red-500 md:my-4 md:text-2xl'>
            <i>{error.statusText || error.message}</i>
          </p>
          <button onClick={() => {navigate(-1)}} className='bg-blue-500 text-white py-2 px-6 rounded md:font-bold'>Back</button>
        </div>
          {/* description section end */}
        </div>
      </div>
      {/* error page end */}
    </div>
  );
};

export default ErrorPage;