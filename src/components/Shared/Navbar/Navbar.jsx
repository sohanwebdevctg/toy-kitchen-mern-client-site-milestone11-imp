import './Navbar.css';
import logo from '../../../../public/logo/toyKitchenImage.jpg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../../../Provider/AuthProvider';
import Swal from 'sweetalert2'

const Navbar = () => {

  const {userData, logOut} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const outBtn = () => {
    logOut();
    Swal.fire({
      title: "Success",
      text: "You Are logOut",
      icon: "success"
    });
    navigate('/')
  }

  return (
    <div className='hidden'>
      {/* desktop site start */}
      <div className='bg-gray-400'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center h-20'>
            {/* logo site start */}
            <div className='flex gap-3 items-center'>
              <img src={logo} className='w-10 h-10 rounded-full'></img>
              <h1 className='text-3xl font-bold'><em>ToyKitchen</em></h1>
            </div>
            {/* logo site end */}
            {/* link site start */}
            <div className='flex gap-10'>
              <NavLink to='/' className={({ isActive}) => isActive ? "text-red-700" : ""}>Home</NavLink>
              <NavLink to='/allToys' className={({ isActive}) => isActive ? "text-red-700" : ""}>AllToys</NavLink>
              <NavLink to='/myToys' className={({ isActive}) => isActive ? "text-red-700" : ""}>MyToys</NavLink>
              {
                userData ? <NavLink to='/addAToys' className={({ isActive}) => isActive ? "text-red-700" : ""}>AddAToys</NavLink> : ''
              }
              <NavLink to='/blogs' className={({ isActive}) => isActive ? "text-red-700" : ""}>Blogs</NavLink>
            </div>
            {/* link site end */}
            {/* login site start */}
            <div>
              {
                  userData ? <div className='flex gap-4 items-center'>
                  <div>
                    <img className='w-10 h-10 rounded-full' src={userData && userData ? userData?.photoURL : ''} title={userData && userData ? userData?.displayName : 'No-Data'}></img>
                  </div>
                    <button onClick={outBtn} className='bg-red-600 py-2 px-3 rounded'>LogOut</button>
                  </div> 
                : <div>
                <Link to="/login">
                  <button className='bg-red-600 py-2 px-3 rounded'>LogIn</button>
                  </Link>
                </div>
              }
            </div>
            {/* login site end */}
          </div>
        </div>
      </div>
      {/* desktop site end */}
      {/* mobile site start */}
      <div className='hidden'></div>
      {/* mobile site end */}
    </div>
  );
};

export default Navbar;