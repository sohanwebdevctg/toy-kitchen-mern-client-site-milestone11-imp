import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import './AllToys.css';
import { useState } from 'react';
import Loading from './../Loading/Loading';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {

  const navigation = useNavigation();

  const loaderData = useLoaderData()
  const [data, setData] = useState(loaderData)
  
  let i = 1;

  // search function for toy name
  const searchToy = (event) => {
    event.preventDefault()
    const form = event.target;

    const name = form.toy.value;
    
    const value = data.filter(result => result.toyName === name);
    setData(value);

    form.reset();
  }

  // title
  useTitle('All Toys')

  return (
    <div>
      {navigation.state === 'loading' ? <Loading></Loading> : ''}
      {/* allToys section start */}
        <div className='container mx-auto my-10'>
          {/* search section start */}
          <div className='bg-black text-enter p-2 my-5 md:w-[500px] w-[310px]'>
            <form onSubmit={searchToy} className='grid grid-cols-2 md:gap-3 gap-2'>
              <input type="text" name="toy" placeholder='search your toy name' ></input>
              <input type="submit" value="search" className='bg-red-700'></input>
            </form>
          </div>
          {/* search section end */}
          {/* desktop section start */}
          <div className="overflow-x-auto md:block hidden">
            <table className="table table-zebra">
              {/* head */}
              <thead className='bg-black text-white'>
                <tr>
                  <th>#</th>
                  <th>Seller Name</th>
                  <th>Toy Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {data.map(toy => (<tr key={toy._id}><td>{i++}</td><td>{toy.name}</td><td>{toy.toyName}</td><td>{toy.category}</td><td>${toy.toyPrice}</td><td>{toy.quantity}</td><td><Link to={`/toyDetails/${toy._id}`}><button className='bg-black text-white p-1 rounded'>Details</button></Link></td></tr>))}
              </tbody>
            </table>
          </div>
          {/* desktop section end */}
        </div>
      {/* allToys section end */}
    </div>
  );
};

export default AllToys;