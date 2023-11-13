import { useEffect, useState } from 'react';
import './ShopCategory.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Category from '../Category/Category';

const ShopCategory = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/shopByCategory')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])


  // filtering categories data
  const kitchenSink = categories.filter(data => data.category === "kitchenSink");
  const kitchenPlaySet = categories.filter(data => data.category === "kitchenPlayset");
  const cookWare = categories.filter(data => data.category === "cookware");
  const kitchenAccessories = categories.filter(data => data.category === "kitchenAccessories");
  const miniKitchen = categories.filter(data => data.category === "miniKitchen");


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
          <div className='md:flex md:mt-3 mt-2'>
            {
              kitchenSink.map((category) => <Category
              key={category._id}
              category={category}
              ></Category>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='md:flex md:mt-3 mt-2'>
            {
              kitchenPlaySet.map((category) => <Category
              key={category._id}
              category={category}
              ></Category>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='md:flex md:mt-3 mt-2'>
            {
              cookWare.map((category) => <Category
              key={category._id}
              category={category}
              ></Category>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='md:flex md:mt-3 mt-2'>
            {
              kitchenAccessories.map((category) => <Category
              key={category._id}
              category={category}
              ></Category>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='md:flex md:mt-3 mt-2'>
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

  // http://localhost:5000/shopByCategory