import Banner from '../Banner/Banner';
import OurGallery from '../OurGallery/OurGallery';
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
    </div>
  );
};

export default Home;