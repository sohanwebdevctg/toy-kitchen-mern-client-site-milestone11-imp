import { Link } from 'react-router-dom';
import './Register.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

  const {registerUser} = useContext(AuthContext)

  const [error, setError] = useState();

  const registerBtn = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    if(name === null){
      setError('please provide your name')
    }
    if(image === null){
      setError('please provide image link')
    }
    if(email === null){
      setError('please provide your email address')
    }
    if(password > 8){
      setError('please provide minimum 8 characters')
    }

    registerUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error.message)
    })


  }

  return (
    <div>
      {/* register form section start */}
      <div className='container mx-auto'>
        <div className='mt-20 mb-10 md:mb-0 flex justify-center items-center'>
          <div className='md:h-52 md:w-96 w-72 text-center'>
            <form onSubmit={registerBtn} className='bg-black p-6'>
              <h1 className='text-2xl text-red-700 mb-3'>Register Form</h1>
              {/* name section start */}
              <input type='text' placeholder='please enter your name' name="name" required className='p-2 w-full'></input><br></br>
              {/* name section end */}
              {/* userImage section start */}
              <input type='text' placeholder='please enter your image' name="image" required className='p-2 mt-3 w-full'></input><br></br>
              {/* userImage section end */}
              {/* email section start */}
              <input type='email' placeholder='please enter your email' name="email" required className='p-2 mt-3 w-full'></input><br></br>
              {/* email section end */}
              {/* password section start */}
              <input type='password' placeholder='please enter your password' name="password" required className='p-2 mt-3 w-full'></input><br></br>
              {/* password section end */}
              {/* password section start */}
              <input type='submit' value="Register" required className='p-2 mt-3 w-full bg-red-700 text-white'></input><br></br>
              {/* password section end */}
              <p className='text-white mt-2'>If you have any account? please <Link to="/login" className='text-red-700'>LogIn</Link></p>
            </form>
          </div>
        </div>
      </div>
      {/* register form section end */}
    </div>
  );
};

export default Register;