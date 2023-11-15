import { useContext, useState } from 'react';
import './LogIn.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import google from '../../../public/logo/google.png'
import useTitle from './../../hooks/useTitle';

const LogIn = () => {

  const {loginUser,googleLogIn} = useContext(AuthContext);
  let navigate =  useNavigate()
  let location = useLocation()

  const [errors, setError] = useState(null);

  const from = location.state?.from?.pathname || "/";

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

    loginUser(email, password)
    .then(result => {
      const user = result.user;
      if(user){
        Swal.fire({
          title: "Good job!",
          text: "You Data added successfully!",
          icon: "success"
        });
        navigate(from, {replace : true})
      }
    })
    .catch(error => {
      if(error){
        Swal.fire({
          title: "Sorry!",
          text: "your data invalid!",
          icon: "error"
        });
      }
    })

  }

    // googleLogIn
    const googleLogBtn = () => {
      googleLogIn()
      .then(result => {
        const user = result.user;
        if(user){
          Swal.fire({
            title: "Good job!",
            text: "You Data added successfully!",
            icon: "success"
          });
          navigate('/')
        }
      })
      .catch(error => {
        if(error){
          Swal.fire({
            title: "Sorry!",
            text: "your data invalid!",
            icon: "error"
          });
        }
      })
    }

    // title
    useTitle('LogIn')

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
              <p className='text-red-700'>{errors ? errors : ''}</p>
              <p className='text-white mt-2'>If you have no account? please <Link to="/register" className='text-red-700'>Register</Link></p>
              <p className='mt-2 flex justify-center text-white items-center bg-red-700 p-2 md:w-28 w-24 rounded-full text-center mx-auto gap-1' onClick={googleLogBtn}><span>Google</span><img src={google} className='md:w-10 md:h-10 w-6 h-6 rounded-full'></img></p>
            </form>
          </div>
        </div>
      </div>
      {/* logIn form section end */}
    </div>
  );
};

export default LogIn;