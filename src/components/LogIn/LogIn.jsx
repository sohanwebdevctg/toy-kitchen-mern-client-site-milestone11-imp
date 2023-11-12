import { useState } from 'react';
import './LogIn.css'
import { Link } from 'react-router-dom';

const LogIn = () => {

  const [error, setError] = useState();

  const logInBtn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if(email === null){
      setError('please provide your email address')
    }
    if(password > 8){
      setError('please provide minimum 8 characters')
    }


    console.log( email, password)

  }


  return (
    <div>
      {/* logIn form section start */}
      <div className='container mx-auto'>
        <div className='mt-20 mb-10 md:mb-0 flex justify-center items-center'>
          <div className='md:h-52 md:w-96 w-72 text-center'>
            <form onSubmit={logInBtn} className='bg-black p-6'>
              <h1 className='text-2xl text-red-700 mb-3'>LogIn Form</h1>
              {/* email section start */}
              <input type='email' placeholder='please enter your email' name="email" required className='p-2 mt-3 w-full'></input><br></br>
              {/* email section end */}
              {/* password section start */}
              <input type='password' placeholder='please enter your password' name="password" required className='p-2 mt-3 w-full'></input><br></br>
              {/* password section end */}
              {/* password section start */}
              <input type='submit' value="LogIn" required className='p-2 mt-3 w-full bg-red-700 text-white'></input><br></br>
              {/* password section end */}
              <p className='text-white mt-2'>If you have no account? please <Link to="/register" className='text-red-700'>Register</Link></p>
            </form>
          </div>
        </div>
      </div>
      {/* logIn form section end */}
    </div>
  );
};

export default LogIn;