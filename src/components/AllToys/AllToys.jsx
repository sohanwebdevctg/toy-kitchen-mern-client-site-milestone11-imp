import { Link, useLoaderData } from 'react-router-dom';
import './AllToys.css';

const AllToys = () => {

  const data = useLoaderData();
  console.log(data)
  let i = 1;

  return (
    <div>
      {/* allToys section start */}
        <div className='container mx-auto my-10'>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
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
        </div>
      {/* allToys section end */}
    </div>
  );
};

export default AllToys;