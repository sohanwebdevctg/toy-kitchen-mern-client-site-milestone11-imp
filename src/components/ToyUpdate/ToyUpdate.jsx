import { useLoaderData, useNavigate } from 'react-router-dom';
import './ToyUpdate.css';
import Swal from 'sweetalert2'
import useTitle from '../../hooks/useTitle';

const ToyUpdate = () => {

  const data = useLoaderData();
  const navigate =  useNavigate()

  const toyUpdate = (event) => {
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

    const update = {name, email, toyName, toyPrice, rating, quantity, image, category, description};

    fetch(`https://toy-kitchen-data-1c9lfyoda-sohanwebdevctgs-projects.vercel.app/toyUpdate/${data?._id}`,{
      method : 'PUT',
      headers : {'content-type' : 'application/json'},
      body : JSON.stringify(update)
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
        navigate(-1)
      }
    })


    form.reset();


  }

  //title
  useTitle('Toy Update')


  return (
    <div>
      {/* addAToys section start */}
      <div className='container mx-auto my-20'>
        {/* title section start */}
        <div>
          <h1 className='text-center md:text-3xl text-sm font-bold'>Please! Update your toy If you like it</h1>
        </div>
        {/* title section end */}
        {/* form section start */}
        <div className='flex justify-center mx-auto bg-slate-300 md:w-[1000px] md:p-5 mt-2 w-full p-3'>
          <div className='w-full'>
            <form onSubmit={toyUpdate}>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3">
                <input type="text" name="name" defaultValue={data?.name} required className='md:p-2'placeholder='enter your name'/>
                <input type="email" name="email" defaultValue={data?.email} required className='md:p-2' placeholder='enter your email'/>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 mt-2 gap-3">
                <input type="text" name="toyName"  required className='md:p-2'placeholder='enter your toy name' defaultValue={data?.toyName}/>
                <input type="number" name="toyPrice" required className='md:p-2' placeholder='enter your toy price' defaultValue={data?.toyPrice}/>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 mt-2 gap-3">
                <input type="number" name="rating"  required className='md:p-2'placeholder='enter your toy rating' min="0" max="5" defaultValue={data?.rating}/>
                <input type="number" name="quantity" required className='md:p-2' placeholder='enter your toy quantity' defaultValue={data?.quantity}/>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 mt-2 gap-3">
                <input type="text" name="image" required className='md:p-2' placeholder='enter your image link' defaultValue={data?.image}/>
                <select name="category">
                  <option value={data?.category}>{data?.category}</option>
                </select>
              </div>
              <div className="grid md:grid-cols-1 grid-cols-1 md:gap-5 mt-2 gap-3">
                <input type="text" name="description" required className='md:p-2' placeholder='enter your description' defaultValue={data?.description}/>
              </div>
              <div className="grid md:grid-cols-1 grid-cols-1 md:gap-5 mt-2 gap-3">
                <input type="submit" value="ToyUpdate" className='md:p-2 bg-black text-gray-400'/>
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

export default ToyUpdate;