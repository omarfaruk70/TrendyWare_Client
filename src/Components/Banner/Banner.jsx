import { Link } from "react-router-dom";
import img1 from "/banner.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="md:h-[300px] lg:h-[600px] mx-auto py-12 flex gap-4 text-white"
    style={{backgroundImage: `url(${img1})`, backgroundSize: '100% auto', backgroundRepeat: 'no-repeat', opacity: '1'}}
    >
      <div className="text-section mx-auto md:ml-10 lg:mx-60 md:mt-8 lg:mt-14">
        <h1 className="md:text-3xl lg:text-5xl font-bold">Welcome to Trendy<span className="text-yellow-500 font-primaryFont font-extrabold underline underline-offset-4 decoration-wavy">Wear</span></h1>
        <h2 className=" mt-4 md:text-lg lg:text-xl mb-8 font-thin text-sm">Shopping for Every Generation - Built on Trust</h2>
        <div className="flex justify-center hover:scale-y-110 hover:skew-y-2 font-bold items-center transition duration-500 ease-linear rounded-tl-3xl rounded-br-3xl  gap-3 cursor-pointer h-10 w-32 md:h-14 lg:h-16 md:w-40 lg:w-44 btn-ghost bg-blue-400 ">
        <Link to={'/shop'}>
        <button className="text-xs md:text-base lg:text-lg">Explore Shop</button>
        </Link>
        <FaArrowRightLong className="text-2xl font-bold duration-200 ease-in"/>
        </div>
      </div>   
    </section>
  );
};
export default Banner;
