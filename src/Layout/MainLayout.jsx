import { Outlet } from 'react-router-dom';
import './MainLayout.css'
import Navbar from './../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      {/* this is navbar section start */}
      <Navbar></Navbar>
      {/* this is navbar section end */}
      {/* this is router section start */}
      <div className='md:min-h-[520px]'>
        <Outlet></Outlet>
      </div>
      {/* this is router section end */}
      {/* this is footer section start */}
      <Footer></Footer>
      {/* this is footer section end */}
    </div>
  );
};

export default MainLayout;