import { Outlet, useNavigation } from 'react-router-dom';
import './MainLayout.css'
import Navbar from './../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';
import Loading from '../components/Loading/Loading';

const MainLayout = () => {

  const navigation = useNavigation()

  return (
    <div>
      {/* this is navbar section start */}
      <Navbar></Navbar>
      {/* this is navbar section end */}
      {/* this is router section start */}
      {navigation.state === "loading" ? <Loading></Loading> : ''}
      <div className='md:min-h-[520px] md:mt-28 mt-20'>
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