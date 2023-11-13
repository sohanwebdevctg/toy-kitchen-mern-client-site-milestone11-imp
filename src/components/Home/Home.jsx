import Banner from '../Banner/Banner';
import OurGallery from '../OurGallery/OurGallery';
import OurStore from '../OurStore/OurStore';
import './Home.css';

const Home = () => {
  return (
    <div>
      {/* banner section start */}
      <Banner></Banner>
      {/* banner section end */}
      {/* ourGallery section start */}
      <OurGallery></OurGallery>
      {/* ourGallery section end */}
      {/* outStore section start */}
      <OurStore></OurStore>
      {/* outStore section end */}
    </div>
  );
};

export default Home;