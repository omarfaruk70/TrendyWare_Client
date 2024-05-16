import PropTypes from 'prop-types'; 
import { RiStackedView } from "react-icons/ri";
import { FaShoppingCart, FaStar } from "react-icons/fa";


const ProductCard = ({ title, img, price, ratings }) => {
  return (
    <div className="rounded-lg bg-white p-2 shadow-lg">
      <div className='relative'>
        <h2 className="absolute z-50 top-2 right-5 font-primaryFont bg-blue-500 text-white w-[50px] text-center">New</h2>
      <img
        className="rounded-lg object-cover h-[380px] w-full hover:saturate-150 hover:contrast-75 hover:w-full hover:-hue-rotate-15 opacity-100 hover:scale-x-105  cursor-pointer duration-1000"
        src={img}
        loading="lazy"
        alt="Product Image"
      />
      </div>
      <div>
      <div className="grid gap-2">
        <h1 className="text-lg font-semibold text-center mt-1">{title}</h1>
        <div className="text-lg font-semibold flex justify-between items-center px-2">
          <div className='flex gap-5'>
          <h1>${price}</h1>
          <h2>$ <span className='line-through text-red-600'>{price + 23}</span></h2>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <h2  className='text-yellow-500'><FaStar/></h2>
            <h2>({ratings})</h2>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-2">
        <button className="rounded-lg bg-amber-500 w-full px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">
          <RiStackedView className='text-xl font-bold mx-auto'/>
        </button>
        <button className="rounded-md border w-full border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">
          <FaShoppingCart className='text-xl font-bold mx-auto'/>
        </button>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  ratings: PropTypes.number.isRequired
}