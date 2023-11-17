import { useEffect, useState } from 'react';
import './ShopCategory.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Category from '../Category/Category';

const ShopCategory = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://toy-kitchen-data.vercel.app/shopByCategory')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])



  // filtering categories data
  const kitchenSink = categories.filter(data => data.category === "kitchenSink").slice(0,6);
  const kitchenPlaySet = categories.filter(data => data.category === "kitchenPlaySet").slice(0,6);
  const cookWare = categories.filter(data => data.category === "cookware");
  const kitchenAccessories = categories.filter(data => data.category === "kitchenAccessories").slice(0,6);
  const miniKitchen = categories.filter(data => data.category === "miniKitchen").slice(0,6);




  return (
    <div className='my-5'>
      {/* react tabs section start */}
      <Tabs>
        {/* header section start */}
        <TabList>
          <Tab><span className='text-xs md:text-xl'>Kitchen Sink</span></Tab>
          <Tab><span className='text-xs md:text-xl'>Kitchen Play Set</span></Tab>
          <Tab><span className='text-xs md:text-xl'>Cook Ware</span></Tab>
          <Tab><span className='text-xs md:text-xl'>Kitchen Accessories</span></Tab>
          <Tab><span className='text-xs md:text-xl'>Mini Kitchen</span></Tab>
        </TabList>
        {/* header section end */}

        {/* body section start */}
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:mt-3 mt-2'>
            {
              kitchenSink.map((category) => <Category
              key={category._id}
              category={category}
              ></Category>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:mt-3 mt-2'>
            {
              kitchenPlaySet.map((category) => <Category
              key={category._id}
              category={category}
              ></Category>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:mt-3 mt-2'>
            {
              cookWare.map((category) => <Category
              key={category._id}
              category={category}
              ></Category>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:mt-3 mt-2'>
            {
              kitchenAccessories.map((category) => <Category
              key={category._id}
              category={category}
              ></Category>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:mt-3 mt-2'>
            {
              miniKitchen.map((category) => <Category
              key={category._id}
              category={category}
              ></Category>)
            }
          </div>
        </TabPanel>
        {/* body section start */}
      </Tabs>
      {/* react tabs section end */}
    </div>
  );
};

export default ShopCategory;
