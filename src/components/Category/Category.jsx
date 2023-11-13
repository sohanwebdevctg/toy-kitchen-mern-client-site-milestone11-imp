import './Category.css';

const Category = ({category}) => {
  
  const {_id, image, toyName, toyPrice, ratting } = category;
  return (
    <div>
      {/* category section start */}
      <img className='w-96 h-72' src={image}></img>
      {/* category section end */}
    </div>
  );
};

export default Category;