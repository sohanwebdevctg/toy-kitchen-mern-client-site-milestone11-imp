import './Navbar.css';
import logo from '../../../../public/logo/toyKitchenImage.jpg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

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
    <div>
      {/* desktop site start */}
      <div className='bg-black hidden md:block fixed w-full top-0 right-0 left-0 z-50'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center h-20'>
            {/* logo site start */}
            <div className='flex gap-3 items-center'>
              <Link to="/">
                <img src={logo} className='w-10 h-10 rounded-full'></img>
              </Link>
              <Link>
              <h1 className='text-3xl font-bold text-slate-300'><em>ToyKitchen</em></h1>
              </Link>
            </div>
            {/* logo site end */}
            {/* link site start */}
            <div className='flex gap-10'>
              <NavLink to='/' className={({ isActive}) => isActive ? "text-red-700" : "text-white"}>Home</NavLink>
              <NavLink to='/allToys' className={({ isActive}) => isActive ? "text-red-700" : "text-white"}>AllToys</NavLink>
              {
                userData ? <NavLink to='/myToys' className={({ isActive}) => isActive ? "text-red-700" : "text-white"}>MyToys</NavLink> : ''
              }
              {
                userData ? <NavLink to='/addAToys' className={({ isActive}) => isActive ? "text-red-700" : "text-white"}>AddAToys</NavLink> : ''
              }
              <NavLink to='/blogs' className={({ isActive}) => isActive ? "text-red-700" : "text-white"}>Blogs</NavLink>
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
      <div className='md:hidden block fixed w-full top-0 right-0 left-0 z-50'>
        <div className="navbar bg-black text-white">
          <div className="navbar-start">
            {/* logo site start */}
            <div className='flex gap-1 items-center'>
              <Link to="/">
                <img src={logo} className='w-6 h-6 rounded-full'></img>
              </Link>
              <Link>
              <h1 className='text-base font-bold'><em>ToyKitchen</em></h1>
              </Link>
            </div>
            {/* logo site end */}
          </div>
        <div className="navbar-end">
          <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-[300px] static right-1">
                    <li>
                      <NavLink to='/' className={({ isActive}) => isActive ? "text-red-700" : "text-white"}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to='/allToys' className={({ isActive}) => isActive ? "text-red-700" : "text-white"}>AllToys</NavLink>
                    </li>
                    {
                      userData ? 
                      <li>
                      {
                        userData ? <NavLink to='/myToys' className={({ isActive}) => isActive ? "text-red-700" : "text-white"}>MyToys</NavLink> : ''
                      }
                    </li>
                      :''
                    }
                    {
                      userData ?
                      <li>
                      {
                      userData ? <NavLink to='/addAToys' className={({ isActive}) => isActive ? "text-red-700" : "text-white"}>AddAToys</NavLink> : ''
                      }
                    </li>
                      : ''
                    }
                    <li>
                      <NavLink to='/blogs' className={({ isActive}) => isActive ? "text-red-700" : "text-white"}>Blogs</NavLink>
                    </li>
                    <li>
                    {
                  userData ? <div className='flex flex-col items-start'>
                  <div>
                    <img className='w-8 h-8 rounded-full' src={userData && userData ? userData?.photoURL : ''} title={userData && userData ? userData?.displayName : 'No-Data'}></img>
                  </div>
                    <button onClick={outBtn} className='bg-red-600 py-1 px-2 rounded'>LogOut</button>
                  </div> 
                : <div>
                <Link to="/login">
                  <button className='bg-red-600 py-1 px-2 rounded'>LogIn</button>
                  </Link>
                </div>
              }
                    </li>
              
              
              
              
                  </ul>
                </div>
          </div>
        </div>
      </div>
      {/* mobile site end */}

    </div>
  );
};

export default Navbar;