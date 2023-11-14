import './AddAToys.css';
import { useContext } from 'react';
import { AuthContext } from './../../Provider/AuthProvider';
import Swal from 'sweetalert2'

const AddAToys = () => {

  const {userData} = useContext(AuthContext);
  
  const addAToys = (event) => {
    event.preventDefault();

    const form = event.target;

    // all input fields
    const name = form.name.value;
    const email = form.email.value;
    const toyName = form.toyName.value;
    const toyPrice = form.toyPrice.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const image = form.image.value;
    const category = form.category.value;
    const description = form.description.value;

    const data = {name, email, toyName, toyPrice, rating, quantity, image, category, description};

    fetch('http://localhost:5000/addAToys',{
      method : 'POST',
      headers : {'content-type' : 'application/json'},
      body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(value => {
      if(value){
        Swal.fire({
          title: "Success",
          text: "Your data added successfully",
          icon: "success"
        });
      }else{
        Swal.fire({
          title: "Error",
          text: "Your data invalidate",
          icon: "danger"
        });
      }
    })

    form.reset();


  }

  return (
    <div>
      {/* addAToys section start */}
      <div className='container mx-auto my-20'>
        {/* title section start */}
        <div>
          <h1 className='text-center md:text-3xl text-sm font-bold'>Please! AddAToy If You Love or Like any Toy</h1>
        </div>
        {/* title section end */}
        {/* form section start */}
        <div className='flex justify-center mx-auto bg-slate-300 md:w-[1000px] md:p-5 mt-2 w-full p-3'>
          <div className='w-full'>
            <form onSubmit={addAToys}>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3">
                <input type="text" name="name" defaultValue={userData?.displayName} required className='md:p-2'placeholder='enter your name'/>
                <input type="email" name="email" defaultValue={userData?.email} required className='md:p-2' placeholder='enter your email'/>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 mt-2 gap-3">
                <input type="text" name="toyName"  required className='md:p-2'placeholder='enter your toy name'/>
                <input type="text" name="toyPrice" required className='md:p-2' placeholder='enter your toy price'/>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 mt-2 gap-3">
                <input type="number" name="rating"  required className='md:p-2'placeholder='enter your toy rating' min="0" max="5"/>
                <input type="number" name="quantity" required className='md:p-2' placeholder='enter your toy quantity'/>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 mt-2 gap-3">
                <input type="text" name="image" required className='md:p-2' placeholder='enter your image link'/>
                <select name="category">
                  <option value="kitchenSink">Kitchen Sink</option>
                  <option value="kitchenPlaySet">Kitchen PlaySet</option>
                  <option value="kitchenAccessories">Kitchen Accessories</option>
                  <option value="cookware">Cook Ware</option>
                  <option value="miniKitchen">Mini Kitchen</option>
                </select>
              </div>
              <div className="grid md:grid-cols-1 grid-cols-1 md:gap-5 mt-2 gap-3">
                <input type="text" name="description" required className='md:p-2' placeholder='enter your description'/>
              </div>
              <div className="grid md:grid-cols-1 grid-cols-1 md:gap-5 mt-2 gap-3">
                <input type="submit" value="AddAToys" className='md:p-2 bg-black text-gray-400'/>
              </div>
            </form>
          </div>
        </div>
        {/* form section end */}
      </div>
      {/* addAToys section end */}
    </div>
  );
};

export default AddAToys;