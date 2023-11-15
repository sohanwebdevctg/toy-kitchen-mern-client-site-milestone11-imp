import { useContext, useEffect, useState } from 'react';
import './MyToys.css'
import { AuthContext } from './../../Provider/AuthProvider';
import { Link, useNavigation } from 'react-router-dom';
import Swal from 'sweetalert2'
import Loading from '../Loading/Loading';

const MyToys = () => {

  const {userData} = useContext(AuthContext);
  const [data, setData] = useState([]);
  let i = 1;
  const navigation = useNavigation();

  const url = `http://localhost:5000/myToys?email=${userData?.email}`

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(newData => setData(newData))
  }, [url])

  const deleteData = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const id = _id;
    if(id){
      fetch(`http://localhost:5000/deleteData/${id}`,{
      method : 'DELETE'
      })
      .then(res => res.json())
      .then(value => {
        if(value){
          const newData = data.filter(value => value._id !== _id);
          setData(newData)
          Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        }
      })
    }
      }
    });
    



    
  }

  const searchPrice = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.price.value;

    fetch('http://localhost:5000/high')
    .then(res => res.json())
    .then(newData => {
      if(name === "high"){
        setData(newData)
      }
    })
    fetch('http://localhost:5000/low')
    .then(res => res.json())
    .then(newData => {
      if(name === "low"){
        setData(newData)
      }
    })
   
    
  }

  
  return (
    <div>
      {/* allToys section start */}
      <div className='container mx-auto my-10'>
      {navigation.state === 'loading' ? <Loading></Loading> : ''}
        {/* search section start */}
        <div className='bg-black text-enter p-2 my-5 md:w-[500px] w-[310px]'>
            <form onSubmit={searchPrice} className='grid grid-cols-2 md:gap-3 gap-2'>
              <select name="price">
                <option value="high">High to Low Price</option>
                <option value="low">Low to Heigh Price</option>
              </select>
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
                  <th>Toy Image</th>
                  <th>Toy Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {data.map(toy => (<tr key={toy._id}><td>{i++}</td><td><img className='w-20 h-20' src={toy.image}></img></td><td>{toy.toyName}</td><td>${toy.toyPrice}</td><td>{toy.quantity}</td><td><Link to={`/toyUpdate/${toy._id}`}><button className='bg-black text-white p-1 rounded'>Update</button></Link><button onClick={() => deleteData(toy._id)} className='bg-red-700 text-white p-1 rounded ml-1'>Delete</button></td></tr>))}
                
              </tbody>
            </table>
          </div>
          {/* desktop section end */}
          {/* mobile section star */}
          <div className="overflow-x-auto block md:hidden">
            <table className="table table-zebra">
              {/* head */}
              <thead className='bg-black text-white'>
                <tr>
                  <th>Toy Image</th>
                  <th>Toy Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {data.map(toy => (<tr key={toy._id}><td><img className='w-20 h-20' src={toy.image}></img></td><td>{toy.toyName}</td><td><Link to={`/toyUpdate/${toy._id}`}><button className='bg-black text-white p-1 rounded'>Update</button></Link><button onClick={() => deleteData(toy._id)} className='bg-red-700 text-white p-1 rounded mt-1'>Delete</button></td></tr>))}
                
              </tbody>
            </table>
          </div>
          {/* mobile section end */}
        </div>
      {/* allToys section end */}
    </div>
  );
};

export default MyToys;