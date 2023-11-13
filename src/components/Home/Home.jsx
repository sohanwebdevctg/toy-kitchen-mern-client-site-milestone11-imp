import AboutOurStore from '../AboutOurStore/AboutOurStore';
import Banner from '../Banner/Banner';
import OurBrands from '../OurBrands/OurBrands';
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
      {/* aboutOurStore section start */}
      <AboutOurStore></AboutOurStore>
      {/* aboutOurStore section end */}
      {/* ourBrands section start */}
      <OurBrands></OurBrands>
      {/* ourBrands section end */}
    </div>
  );
};

export default Home;